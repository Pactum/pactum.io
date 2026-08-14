#!/usr/bin/env python3
"""Generate Pactum IO website and consulting terms PDF with the brand watermark."""

from __future__ import annotations

from io import BytesIO
from pathlib import Path

from PIL import Image
from pypdf import PdfReader, PdfWriter
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.lib.utils import ImageReader
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer

ROOT = Path(__file__).resolve().parents[1]
WATERMARK = ROOT / "assets/images/tos-watermark.png"
OUTPUTS = [
    ROOT / "assets/PactumTOS.pdf",
    ROOT / "public/PactumTOS.pdf",
]

SECTIONS: list[tuple[str, str]] = [
    (
        "Parties",
        "These terms (“Agreement”) are between Pactum IO, LLC (“PACTUM,” “we,” or “us”) "
        "and the person or company that uses pactum.io or engages PACTUM for consulting "
        "services (“Customer,” “you”). PACTUM is a single-operator software consulting "
        "practice. Work is performed by Matthew Swezey unless a written statement of work "
        "names someone else.",
    ),
    (
        "What this Agreement covers",
        "This Agreement covers (a) use of the PACTUM website at pactum.io and related "
        "pages, and (b) professional consulting services PACTUM provides under a written "
        "order, proposal, or statement of work (“SOW”). The website is informational. "
        "It does not sell products, accept checkout, or create an engagement by itself. "
        "A consulting engagement starts only when both parties agree in writing to an SOW "
        "that references these terms.",
    ),
    (
        "Website use",
        "You may view and share public pages for lawful purposes. You may not scrape, "
        "overload, reverse engineer, or misuse the site, or use it to send unsolicited "
        "commercial messages. Site content, marks, and the PACTUM logo are owned by "
        "PACTUM or its licensors. No license is granted except the limited right to use "
        "the site as published. The site may change or go offline without notice. "
        "PACTUM does not enable cookie-based advertising or analytics tracking on the "
        "site. Contact is offered through LinkedIn or other channels PACTUM publishes, "
        "not by posting a personal email address on the site.",
    ),
    (
        "Services",
        "PACTUM provides software engineering consulting, which may include SaaS "
        "bootstrapping, cloud architecture, applied AI systems, full-stack product work, "
        "DevOps, internal platforms, and blockchain or crypto systems, as described in "
        "the applicable SOW. PACTUM does not sell hardware, packaged software licenses, "
        "or a product catalog through the website. Unless an SOW says otherwise, PACTUM "
        "performs professional services as an independent contractor and does not become "
        "your employee, partner, or exclusive provider.",
    ),
    (
        "Statements of work",
        "Each engagement is defined by an SOW. The SOW controls scope, deliverables, "
        "timeline, fees, and any engagement-specific terms. If an SOW conflicts with "
        "this Agreement, the SOW controls for that engagement. Email, LinkedIn, or chat "
        "messages are not an SOW unless both parties clearly agree in writing that a "
        "named document is the SOW.",
    ),
    (
        "Customer responsibilities",
        "PACTUM’s ability to perform depends on your timely cooperation, access, "
        "decisions, and the accuracy of information you provide. You are responsible for "
        "your accounts, environments, licenses, and third-party vendors, and for "
        "obtaining any consents needed for PACTUM to work in your systems. Delays on "
        "your side may move dates and may increase fees if the SOW allows.",
    ),
    (
        "Change orders",
        "Material changes to scope, deliverables, or timeline require a written change "
        "order agreed by both parties. PACTUM may pause work that is outside the current "
        "SOW until the change is agreed.",
    ),
    (
        "Fees, expenses, and payment",
        "Fees are those stated in the SOW or written quote. Unless the SOW says "
        "otherwise, invoices are due within thirty (30) days of the invoice date, and "
        "amounts are exclusive of taxes. Reasonable pre-approved out-of-pocket expenses "
        "may be billed in addition to fees. Late amounts may accrue interest at the "
        "lesser of 1.5% per month or the maximum allowed by law. PACTUM may suspend "
        "work on open SOWs if invoices are past due.",
    ),
    (
        "Intellectual property",
        "Each party keeps ownership of intellectual property it had before the "
        "engagement, and of tools, frameworks, templates, and generic know-how it "
        "develops independently (“Pre-existing IP”). You grant PACTUM a limited license "
        "to use your materials only as needed to perform the SOW. Upon full payment of "
        "fees for a deliverable created specifically for you under an SOW, PACTUM "
        "assigns to you the copyright in that custom deliverable, excluding Pre-existing "
        "IP and third-party materials. PACTUM retains a non-exclusive license to use "
        "non-confidential general knowledge, patterns, and residual know-how learned "
        "while performing the work. Open-source and third-party components remain under "
        "their own licenses. PACTUM may reuse Pre-existing IP in other work.",
    ),
    (
        "Confidentiality",
        "Information a party discloses that is marked confidential, or that a reasonable "
        "person would treat as confidential, may be used only to perform this Agreement "
        "or the SOW and must be protected with reasonable care for three (3) years after "
        "disclosure, or longer if it remains a trade secret. These duties do not apply "
        "to information that is public, already known without duty, independently "
        "developed, or required to be disclosed by law. The existence of a public "
        "marketing website is not confidential.",
    ),
    (
        "Personal information",
        "The public website is not intended to collect personal information through "
        "forms or tracking cookies. If you contact PACTUM through a published channel, "
        "PACTUM will use that information only to respond and, if you engage PACTUM, "
        "to deliver the services. In an engagement, you remain the controller of "
        "personal data in your systems. PACTUM will use any personal data it accesses "
        "only to perform the SOW and will not sell it. Each party will comply with "
        "privacy laws that apply to its own role.",
    ),
    (
        "Performance and warranty",
        "PACTUM will perform services in a professional manner consistent with generally "
        "recognized commercial practices for similar consulting work. If you give written "
        "notice of a material failure within thirty (30) days after delivery of the "
        "affected services, PACTUM will re-perform those services. If re-performance is "
        "not commercially reasonable, PACTUM will refund the fees paid for the "
        "non-conforming portion. This is your exclusive remedy for service performance. "
        "PACTUM does not warrant that software, cloud systems, or third-party platforms "
        "will be error-free or uninterrupted, or that advice will achieve a particular "
        "business result. The website is provided “as is.”",
    ),
    (
        "Limitation of liability",
        "PACTUM’s total liability under this Agreement and any SOW is limited to the "
        "fees you paid PACTUM for the engagement giving rise to the claim in the twelve "
        "(12) months before the claim. Neither party is liable for lost profits, lost "
        "revenue, downtime, loss of data, or indirect, special, incidental, or "
        "consequential damages. This section does not limit liability for fraud, "
        "willful misconduct, infringement of the other party’s intellectual property, "
        "or any liability that cannot be limited under applicable law.",
    ),
    (
        "Non-exclusivity and publicity",
        "PACTUM may work with other clients, including in overlapping industries, "
        "subject to confidentiality. PACTUM will not identify you as a client in public "
        "marketing without your prior consent, except that PACTUM may describe work in "
        "generic, non-identifying terms.",
    ),
    (
        "Term and termination",
        "Website terms apply while you use the site. An SOW lasts for the period it "
        "states. Either party may terminate an SOW for a material breach that remains "
        "uncured for ten (10) days after written notice, or immediately if the other "
        "party becomes insolvent. You will pay for work performed and approved expenses "
        "through the effective termination date. Sections that by their nature should "
        "survive — including intellectual property, confidentiality, payment, and "
        "limitation of liability — survive termination.",
    ),
    (
        "Force majeure",
        "Neither party is liable for delay or failure caused by events beyond its "
        "reasonable control, including outages of third-party cloud or network "
        "providers, except for payment obligations.",
    ),
    (
        "Disputes",
        "The parties will first try to resolve a dispute by discussion between Matthew "
        "Swezey and a Customer decision-maker. If that fails, either party may pursue "
        "its legal remedies. This Agreement does not require arbitration unless an SOW "
        "says otherwise.",
    ),
    (
        "Governing law",
        "This Agreement is governed by the laws of the State of Texas, excluding "
        "conflict-of-law rules. Courts located in Texas have exclusive jurisdiction, "
        "except that PACTUM may bring a claim for unpaid fees in a court where Customer "
        "is located. The United Nations Convention on Contracts for the International "
        "Sale of Goods does not apply.",
    ),
    (
        "General",
        "This Agreement and any SOW are the entire understanding for their subject "
        "matter and replace prior discussions on that subject. Changes must be in a "
        "writing agreed by both parties. You may not assign an SOW without PACTUM’s "
        "consent, except to a successor of substantially all of your business. If a "
        "provision is unenforceable, the rest remains in effect. Failure to enforce a "
        "term is not a waiver. Notices may be sent to the contacts named in the SOW, "
        "or for website matters to the contact method published on pactum.io. "
        "These terms may be updated for website use by posting a new version; SOWs "
        "already signed stay under the version they referenced unless both parties "
        "agree otherwise.",
    ),
]


class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states: list[dict] = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        page_count = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self._draw_page_number(page_count)
            super().showPage()
        super().save()

    def _draw_page_number(self, page_count: int):
        width, _height = letter
        self.saveState()
        self.setFillColorRGB(0, 0, 0)
        self.setFont("Times-Roman", 10)
        self.drawCentredString(
            width / 2, 0.55 * inch, f"-- {self._pageNumber} of {page_count} --"
        )
        self.restoreState()


def faded_watermark() -> BytesIO:
    image = Image.open(WATERMARK).convert("RGBA")
    red, green, blue, alpha = image.split()
    alpha = alpha.point(lambda value: int(value * 0.22))
    faded = Image.merge("RGBA", (red, green, blue, alpha))
    buf = BytesIO()
    faded.save(buf, format="PNG")
    buf.seek(0)
    return buf


def watermark_page() -> BytesIO:
    mark = faded_watermark()
    buf = BytesIO()
    c = canvas.Canvas(buf, pagesize=letter)
    width, height = letter
    mark_h = 6.4 * inch
    mark_w = mark_h * (527 / 667)
    c.drawImage(
        ImageReader(mark),
        (width - mark_w) / 2,
        (height - mark_h) / 2 - 0.15 * inch,
        width=mark_w,
        height=mark_h,
        mask="auto",
        preserveAspectRatio=True,
        anchor="c",
    )
    c.save()
    buf.seek(0)
    return buf


def build(path: Path) -> None:
    styles = getSampleStyleSheet()
    title = ParagraphStyle(
        "TosTitle",
        parent=styles["Title"],
        fontName="Times-Bold",
        fontSize=16,
        leading=20,
        alignment=TA_CENTER,
        spaceAfter=6,
        textColor="black",
    )
    subtitle = ParagraphStyle(
        "TosSub",
        parent=styles["Normal"],
        fontName="Times-Italic",
        fontSize=11,
        leading=14,
        alignment=TA_CENTER,
        spaceAfter=18,
    )
    body = ParagraphStyle(
        "TosBody",
        parent=styles["Normal"],
        fontName="Times-Roman",
        fontSize=11,
        leading=15,
        alignment=TA_JUSTIFY,
        spaceAfter=11,
    )

    story = [
        Paragraph("PACTUM IO, LLC", title),
        Paragraph("WEBSITE AND CONSULTING TERMS", title),
        Paragraph("Effective August 14, 2026", subtitle),
    ]
    for index, (heading, text) in enumerate(SECTIONS, start=1):
        story.append(Paragraph(f"<b>{index}. {heading}.</b> {text}", body))
        story.append(Spacer(1, 2))
    story.append(
        Paragraph(
            "The parties confirm their agreement to these terms by using the PACTUM "
            "website or by referencing these terms in an SOW or other written order.",
            body,
        )
    )

    path.parent.mkdir(parents=True, exist_ok=True)
    text_buf = BytesIO()
    doc = SimpleDocTemplate(
        text_buf,
        pagesize=letter,
        leftMargin=1.0 * inch,
        rightMargin=1.0 * inch,
        topMargin=0.9 * inch,
        bottomMargin=0.85 * inch,
        title="Pactum IO, LLC Website and Consulting Terms",
        author="Pactum IO, LLC",
        creator="Pactum IO",
    )
    doc.build(story, canvasmaker=NumberedCanvas)

    text_buf.seek(0)
    text_pdf = PdfReader(text_buf)
    mark_bytes = watermark_page().getvalue()
    writer = PdfWriter()
    for page in text_pdf.pages:
        underlay = PdfReader(BytesIO(mark_bytes)).pages[0]
        underlay.merge_page(page, over=True)
        writer.add_page(underlay)
    writer.add_metadata(
        {
            "/Title": "Pactum IO, LLC Website and Consulting Terms",
            "/Author": "Pactum IO, LLC",
            "/Creator": "Pactum IO",
        }
    )
    with path.open("wb") as handle:
        writer.write(handle)


if __name__ == "__main__":
    if not WATERMARK.exists():
        raise SystemExit(f"Missing watermark: {WATERMARK}")
    for output in OUTPUTS:
        build(output)
        print(f"wrote {output}")

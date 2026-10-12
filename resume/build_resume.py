from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'public' / 'Preetam_Naik_Resume.pdf'
OUT.parent.mkdir(parents=True, exist_ok=True)
pdfmetrics.registerFont(TTFont('Calibri', 'C:/Windows/Fonts/calibri.ttf'))
pdfmetrics.registerFont(TTFont('Calibri-Bold', 'C:/Windows/Fonts/calibrib.ttf'))
pdfmetrics.registerFontFamily('Calibri', normal='Calibri', bold='Calibri-Bold', italic='Calibri', boldItalic='Calibri-Bold')
styles = {
    'name': ParagraphStyle('Name', fontName='Calibri-Bold', fontSize=26, leading=30, alignment=TA_CENTER, spaceAfter=6),
    'contact': ParagraphStyle('Contact', fontName='Calibri', fontSize=10.3, leading=13.3, alignment=TA_CENTER, spaceAfter=2),
    'section': ParagraphStyle('Section', fontName='Calibri-Bold', fontSize=12.3, leading=15, spaceBefore=9, spaceAfter=4, keepWithNext=True),
    'body': ParagraphStyle('Body', fontName='Calibri', fontSize=10.8, leading=13.7, spaceAfter=2),
    'entry': ParagraphStyle('Entry', fontName='Calibri-Bold', fontSize=11.4, leading=14.5, spaceBefore=5, spaceAfter=2, keepWithNext=True),
    'meta': ParagraphStyle('Meta', fontName='Calibri', fontSize=10.3, leading=13.3, spaceAfter=4, keepWithNext=True),
    'bullet': ParagraphStyle('Bullet', fontName='Calibri', fontSize=10.8, leading=13.7, leftIndent=11, firstLineIndent=-9, spaceAfter=3),
}
story = []

def add(text, style='body'):
    story.append(Paragraph(text, styles[style]))

def bullet(text):
    add('- ' + text, 'bullet')

def link(url, label):
    return '<a href="' + escape(url, {'"': '&quot;'}) + '" color="#000000">' + escape(label) + '</a>'

add('Preetam Naik', 'name')
add('Hyderabad, India | +91 9676290504 | ' + link('mailto:pritam.exe2k4@gmail.com', 'pritam.exe2k4@gmail.com'), 'contact')
add(link('https://github.com/pritamexe2k4-cmyk', 'github.com/pritamexe2k4-cmyk') + ' | ' + link('https://www.linkedin.com/in/preetam-naik2k4', 'linkedin.com/in/preetam-naik2k4'), 'contact')

add('TECHNICAL SKILLS', 'section')
add('<b>Programming:</b> Python, SQL')
add('<b>AI frameworks:</b> LangChain, LangGraph, LangSmith, TensorFlow, Keras, scikit-learn')
add('<b>Data and databases:</b> NumPy, Pandas, SQLite, PostgreSQL, Supabase')
add('<b>Model adaptation:</b> LoRA and quantization fundamentals')
add('<b>Backend and tools:</b> FastAPI, REST APIs, Streamlit, Git, GitHub Actions, n8n, Google Apps Script')

add('WORK EXPERIENCE', 'section')
add('IncluHub | AI Intern and AI Orchestrator', 'entry')
add('Hyderabad, India | March 2026 - August 2026', 'meta')
bullet('Curated 5,000+ fashion-specific data points and developed ingestion and preprocessing workflows for a domain-focused knowledge base.')
bullet('Built an in-house CRM consolidating leads from approximately 8-9 Meta advertising campaigns; connected Meta Graph, Ads and WhatsApp APIs.')
bullet('Automated recurring lead and campaign operations using n8n, Google Apps Script and Google Sheets.')
bullet('Built a Next.js and Supabase school dashboard with Admin, Educator and Student workflows, authentication and row-level security.')

add('PROJECTS', 'section')
add('Harry Potter Conversational Assistant | ' + link('https://github.com/pritamexe2k4-cmyk/harry_potter_project', 'GitHub'), 'entry')
add('Python, LangChain, LangGraph, SQLite, LangSmith', 'meta')
bullet('Implemented persistent, independent chat threads with SQLite archives and LangGraph checkpoints; added bounded history, summaries and interrupted-request recovery.')
bullet('Built 32 offline tests and 20 synthetic evaluation scenarios covering memory, thread isolation and spoiler boundaries; added optional LangSmith tracing for evaluation runs.')

add('NeuroFuse | Multimodal Medical Image Fusion | ' + link('https://github.com/pritamexe2k4-cmyk/MAJOR-PROJECT', 'GitHub'), 'entry')
add('Python, diffusion models, ConvNeXt-B, Vision Transformer, Streamlit', 'meta')
bullet('Contributed to brain-tumor classification research using diffusion-based MRI/CT image fusion, ConvNeXt-B classification and a Streamlit inference workflow.')
bullet('Team study reported fused-image accuracy of 98.20% with ConvNeXt-B and 98.88% with ViT; CT training data included CycleGAN-generated images.')
bullet('Co-authored the NeuroFuse research paper accepted at IEEE ICCCMLA 2026.')

add('DoctorGemma | LLM Fine Tuning Study | ' + link('https://github.com/pritamexe2k4-cmyk/doctor-gemma-finetuning', 'GitHub'), 'entry')
add('Gemma 3 4B, Unsloth, LoRA, 4-bit quantization, TRL', 'meta')
bullet('Studied Gemma 3 4B fine-tuning with 4-bit quantization and LoRA on HealthCareMagic-100k; the reference notebook updates 14.9M parameters, 0.35% of the model.')
bullet('Reference notebook recorded training loss decreasing from 5.9254 to 3.0142 over 30 steps (49.1% lower); no held-out evaluation was reported.')
bullet('Based on Atharva Taras\'s DoctorGemma-3; personal extensions are in progress.')

add('EDUCATION', 'section')
add('VNR Vignana Jyothi Institute of Engineering and Technology', 'entry')
add('B.Tech, Computer Science and Engineering (Artificial Intelligence and Machine Learning)', 'body')
add('Hyderabad, India | 2022 - May 2026 | CGPA: 7.5', 'body')

doc = SimpleDocTemplate(str(OUT), pagesize=A4, leftMargin=43, rightMargin=43, topMargin=32, bottomMargin=32, title='Preetam Naik Resume', author='Preetam Naik')
doc.build(story)
reader = PdfReader(str(OUT))
text = '\n'.join(p.extract_text() for p in reader.pages)
assert len(reader.pages) == 1, f'Expected one page, got {len(reader.pages)}'
assert 'Applied AI Engineer' not in text
assert all(s in text for s in ['Preetam Naik', '9676290504', 'Harry Potter', 'NeuroFuse', 'DoctorGemma', 'EDUCATION'])
assert 'SUMMARY' not in text
assert text.index('TECHNICAL SKILLS') < text.index('WORK EXPERIENCE') < text.index('PROJECTS') < text.index('EDUCATION')
assert all(s not in text for s in ['TypeScript', 'JavaScript', 'PyTorch', 'OpenAI API', 'prompt engineering'])

print(f'Created {OUT}; pages={len(reader.pages)}; extracted words={len(text.split())}')

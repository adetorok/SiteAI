export default function FeatureDocFiling() {
  return (
    <section id="automatic-document-filing" className="py-14">
      <div className="mx-auto max-w-4xl px-6">
        {/* Heading */}
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
            {/* simple document/magic icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M7 2h7l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm7 1v5h5" />
              <path d="M9 13h6M9 17h6M9 9h3" />
            </svg>
          </span>
          <h2 className="text-3xl font-bold tracking-tight">
            Automatic Document Recognition &amp; Filing
          </h2>
        </div>

        {/* Subhead */}
        <p className="mt-3 text-center text-gray-600">
          Email or snap a photo—SiteAI classifies, files, and logs it for you.
        </p>

        {/* Bullets (left-aligned, no links) */}
        <ul className="mt-6 space-y-3 text-left">
          {[
            "Email a document from your registered address; SiteAI knows it's you and routes it automatically.",
            "OCR + entity extraction categorizes by study, subject, visit, and document type—then files it in the correct folder.",
            "De-duplication and versioning to prevent repeats while keeping changes auditable.",
            "Take a picture of a freezer/fridge display; SiteAI parses the temperature and appends a tamper-evident log entry.",
            "Audit-ready timestamps and user attribution; exportable temperature logs (PDF/CSV).",
            "Supports PDF, DOCX, JPG/PNG. PHI handled securely in line with HIPAA controls.",
          ].map((text) => (
            <li key={text} className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 flex-none rounded-full bg-emerald-500" />
              <span className="flex-1 text-gray-700">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

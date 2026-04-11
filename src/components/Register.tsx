export default function Register() {
  const lumaUrl = "https://lu.ma/evt-Z93XbXC3x4i22At";

  return (
    <section id="register" className="py-16 md:py-24 px-6">
      <div className="mx-auto max-w-md text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-t1 tracking-tight">
          Register
        </h2>
        <p className="mt-3 text-base text-t2">
          Free to attend. Sign up on Luma to reserve your spot.
        </p>

        <a
          href={lumaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 bg-accent text-accent-t font-semibold px-8 py-3.5 rounded-lg hover:bg-accent-h transition-colors text-base"
        >
          Register on Luma
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom'

const Registration = () => {
  return (
    <div className="min-h-screen bg-gradient from-slate-100 via-slate-100 to-slate-200 px-4 py-10 text-slate-900">
      <div className="mx-auto grid w-full max-w-5xl items-center gap-10 lg:min-h-[calc(100vh-80px)] lg:grid-cols-[1fr_0.95fr]">
        <section className="text-center lg:text-left">
          <span className="inline-flex items-center rounded-full border border-slate-300 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            Welcome to ALAP
          </span>
          <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-[#1877f2] sm:text-6xl">ALAP</h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-700">
            Create your account and start sharing ideas, memories, and moments with your people.
          </p>
        </section>

        <section className="mx-auto w-full max-w-md rounded-2xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-300/30">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Create account</h2>
          <p className="mt-1 text-sm text-slate-500">It takes less than a minute.</p>
          <div className="mt-5 h-px bg-slate-200" />

          <form className="mt-5 grid gap-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                className="h-12 rounded-xl border border-slate-300 bg-slate-50 px-3 text-sm outline-none transition focus:border-[#1877f2] focus:bg-white focus:ring-4 focus:ring-[#1877f2]/15"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Surname"
                className="h-12 rounded-xl border border-slate-300 bg-slate-50 px-3 text-sm outline-none transition focus:border-[#1877f2] focus:bg-white focus:ring-4 focus:ring-[#1877f2]/15"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email or phone number"
              className="h-12 rounded-xl border border-slate-300 bg-slate-50 px-3 text-sm outline-none transition focus:border-[#1877f2] focus:bg-white focus:ring-4 focus:ring-[#1877f2]/15"
            />

            <input
              type="password"
              name="password"
              placeholder="New password"
              className="h-12 rounded-xl border border-slate-300 bg-slate-50 px-3 text-sm outline-none transition focus:border-[#1877f2] focus:bg-white focus:ring-4 focus:ring-[#1877f2]/15"
            />

            <div>
              <label className="mb-1.5 block text-xs font-semibold text-slate-500">Date of birth</label>
              <input
                type="date"
                name="dob"
                className="h-12 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 text-sm outline-none transition focus:border-[#1877f2] focus:bg-white focus:ring-4 focus:ring-[#1877f2]/15"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold text-slate-500">Gender</label>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <label className="flex items-center justify-between rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 transition hover:border-slate-400">
                  Female
                  <input type="radio" name="gender" value="female" />
                </label>
                <label className="flex items-center justify-between rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 transition hover:border-slate-400">
                  Male
                  <input type="radio" name="gender" value="male" />
                </label>
                <label className="flex items-center justify-between rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 transition hover:border-slate-400">
                  Custom
                  <input type="radio" name="gender" value="custom" />
                </label>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-500">
              By clicking Sign Up, you agree to our Terms, Privacy Policy, and Cookies Policy.
            </p>

            <button
              type="submit"
              className="mt-1 h-12 w-full rounded-xl bg-[#1877f2] text-base font-semibold text-white shadow-lg shadow-blue-300/40 transition hover:-translate-y-0.5 hover:bg-[#166fe0]"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-slate-600">
            <Link to="/" className="font-semibold text-[#1877f2] hover:underline">
              Already have an account?
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
} 

export default Registration
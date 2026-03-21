import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="relative w-full mx-auto overflow-hidden bg-[#f3f5f9] text-slate-900 font-['Manrope']">
      <div className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-[#1877f2]/20 blur-3xl"  />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-300/30 blur-3xl" />

      <div className="relative z-10 grid min-h-screen place-items-center px-6 py-12">
        <div className="w-full max-w-[1880px] grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <section className="w-full space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-1 text-sm font-semibold text-slate-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Trusted by 2M creators
            </span>
            <h1 className="text-5xl lg:text-6xl font-['DM_Serif_Display'] tracking-tight text-[#0f172a]">
              ALAP
            </h1>
            <p className="text-xl lg:text-2xl leading-snug text-slate-600">
              A calm place to share updates, ideas, and moments with the people
              who matter most.
            </p>
            <div className="grid gap-3 text-slate-600">
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#1877f2]" />
                <p>Private chats and groups that feel personal.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#1877f2]" />
                <p>Curated stories with a clean, distraction-free feed.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#1877f2]" />
                <p>Save memories and celebrate milestones together.</p>
              </div>
            </div>
          </section>

          <section className="w-full rounded-2xl border border-white/70 bg-white/80 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.18)] backdrop-blur-xl">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-slate-900">
                Welcome back
              </h2>
              <p className="text-sm text-slate-500">
                Sign in to keep the conversation going.
              </p>
            </div>
            <form className="grid gap-4">
              <input
                className="h-12 rounded-xl border border-slate-200 bg-white/80 px-4 text-base outline-none transition focus:border-[#1877f2] focus:ring-4 focus:ring-[#1877f2]/15"
                type="text"
                name="email"
                placeholder="Email or phone number"
              />
              <input
                className="h-12 rounded-xl border border-slate-200 bg-white/80 px-4 text-base outline-none transition focus:border-[#1877f2] focus:ring-4 focus:ring-[#1877f2]/15"
                type="password"
                name="password"
                placeholder="Password"
              />
              <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-600">
                <label className="flex items-center gap-2">
                  <input
                    className="h-4 w-4 rounded border-slate-300 text-[#1877f2] focus:ring-[#1877f2]"
                    type="checkbox"
                    name="remember"
                  />
                  Remember me
                </label>
                <a className="font-semibold text-[#1877f2]" href="#">
                  Forgotten password?
                </a>
              </div>
              <button
                className="h-12 rounded-xl bg-[#1877f2] text-white text-base font-semibold shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:shadow-blue-500/40"
                type="submit"
              >
                Log In
              </button>
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                <span className="h-px flex-1 bg-slate-200" />
                Or
                <span className="h-px flex-1 bg-slate-200" />
              </div>
              <Link
                to="/registration"
                className="grid h-12 place-items-center rounded-xl border border-slate-200 text-slate-700 text-base font-semibold transition hover:border-slate-300 hover:bg-slate-50"
              >
                Create New Account
              </Link>
            </form>
            <p className="mt-6 text-center text-sm text-slate-500">
              <Link to="/registration" className="font-semibold text-[#1877f2]">
                Create a new account
              </Link>{' '}for a
              celebrity, brand or business.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Login
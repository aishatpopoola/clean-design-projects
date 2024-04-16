import React from 'react'
import ArrowRightIcon from "../icons/arrow-right.svg?component";
import AppleIcon from "../icons/apple.svg?component";
import PlayStoreIcon from "../icons/play-store.svg?component";

const RazorUi = () => {
  return (
    <div className="relative min-h-screen w-full bg-gray-800 text-white">
    <img
      src="/img/circle.svg"
      alt=""
      className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 opacity-40"
    />
    <div className="absolute inset-y-0 right-0 w-2/5 bg-gray-900"></div>
    <div className="relative mx-auto max-w-7xl px-4 pt-8">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-32">
          <a href="#" className="text-2xl font-bold">Razor</a>
          <ul className="flex items-center gap-12 font-medium text-gray-500">
            <li><a href="#" className="hover:text-white">Product</a></li>
            <li><a href="#" className="hover:text-white">Resources</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
          </ul>
        </div>
        <div className="flex items-center gap-4 font-medium text-gray-500">
          <a href="#" className="hover:text-white">Sign In</a>
          <a href="#" className="relative hover:text-white">
            <span>Request Demo</span>
            <img
              src="/img/decoration.svg"
              alt=""
              className="absolute left-0 w-32"
            />
          </a>
        </div>
      </nav>
      <div className="grid grid-cols-2 pt-6">
        <div className="max-w-xl pr-24">
          <div
            className="flex w-36 items-center gap-6 border-t border-gray-700 pt-2"
          >
            <span className="text-sm font-normal text-teal-500">
              Sales@razor.uk
            </span>
            <ArrowRightIcon className="h-4 w-4 text-teal-500" />
          </div>
          <div className="pt-16">
            <span>&#8212; Get the App</span>
            <h1
              className="bg-gradient-to-br from-blue-400 to-emerald-400 bg-clip-text pt-6 text-6xl font-bold tracking-tight text-transparent"
            >
              Enter your email <br />
              &#8212; We'll send you a download link
            </h1>
            <img src="/img/decoration.svg" alt="" className="-mt-2 w-96" />
            <div
              className="mt-10 flex items-center rounded-xl shadow-glow transition-shadow ease-out focus-within:shadow-teal-500/40"
            >
              <input
                type="text"
                className="flex-1 rounded-l-xl border-2 border-r-0 border-gray-700 bg-gray-900 px-8 py-4 leading-6 focus:outline-none"
                placeholder="Sales@dstudio.digital"
              />
              <button
                className="rounded-r-xl border-2 border-l-0 border-gray-700 bg-teal-500 px-8 py-4 text-lg font-bold leading-6 text-gray-900"
              >
                Get Link
              </button>
            </div>
            <p className="pt-8 font-normal tracking-wide text-gray-600">
              By signing up, I agree to the Razor
              <a href="#" className="text-gray-500 underline">Privacy Policy</a> &
              <a href="#" className="text-gray-500 underline">Terms of Service</a>
            </p>
            <div className="flex items-center gap-4 pt-12">
              <button
                className="flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-4 text-gray-500 shadow-glow transition ease-out hover:-translate-y-1 hover:shadow-teal-500/40"
              >
                <PlayStoreIcon className="h-7 w-7" />
                Play Store
              </button>
              <button
                className="flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-4 text-gray-500 shadow-glow transition ease-out hover:-translate-y-1 hover:shadow-teal-500/40"
              >
                <AppleIcon className="h-7 w-7" />
                App Store
              </button>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <div className="flex justify-center gap-8">
            <img
              src="/img/screen-1.png"
              alt=""
              className="h-full w-64 animate-hover"
            />
            <img
              src="/img/screen-2.png"
              alt=""
              className="h-full w-64 animate-hover pt-20"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default RazorUi
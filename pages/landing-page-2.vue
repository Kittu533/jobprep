<template class="bg-white text-[var(--text-primary)]">
    <div class="relative flex min-h-screen flex-col overflow-x-hidden">
        <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
            <div class="container mx-auto px-6 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <svg class="h-8 w-8 text-[var(--primary-color)]" fill="none" viewBox="0 0 48 48"
                            xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                                fill="currentColor" fill-rule="evenodd"></path>
                        </svg>
                        <h2 class="text-2xl font-bold tracking-tighter">JobPrep</h2>
                    </div>
                    <nav class="hidden items-center gap-8 md:flex">
                        <a class="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--primary-color)]"
                            href="#">Features</a>
                        <a class="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--primary-color)]"
                            href="#">How It Works</a>
                        <a class="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--primary-color)]"
                            href="#">Testimonials</a>
                        <a class="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--primary-color)]"
                            href="#">Contact</a>
                    </nav>
                    <div class="flex items-center gap-4">
                        <a class="hidden text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--primary-color)] sm:block"
                            href="#">Log In</a>
                        <button
                            class="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[var(--primary-color)] px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </header>
        <main class="flex-grow">
            <section class="relative py-20 md:py-32 hero-bg">
                <div class="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
                <div class="container relative mx-auto px-6 text-center">
                    <div class="max-w-3xl mx-auto">
                        <h1
                            class="text-4xl font-black leading-tight tracking-tighter text-[var(--text-primary)] sm:text-5xl md:text-6xl">
                            Land Your Dream Job, Faster.
                        </h1>
                        <p class="mt-6 max-w-2xl mx-auto text-lg text-[var(--text-secondary)]">
                            JobPrep is your personal interview coach. Get AI-powered
                            practice, expert feedback, and proven strategies to ace your
                            next interview.
                        </p>
                        <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <button
                                class="flex w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[var(--primary-color)] px-8 py-3.5 text-base font-bold text-white shadow-2xl shadow-[var(--primary-color)]/30 transition-transform hover:scale-105">
                                Start Your Free Trial
                            </button>
                            <button
                                class="flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-8 py-3.5 text-base font-bold text-[var(--text-secondary)] transition-transform hover:scale-105 hover:bg-gray-50">
                                <span class="material-icons text-xl">play_circle</span>
                                Watch Demo
                            </button>
                        </div>
                    </div>
                    <div class="mt-16 md:mt-24">
                        <img alt="3D Illustration of JobPrep interface"
                            class="mx-auto rounded-2xl shadow-2xl w-full max-w-4xl transform transition-transform hover:scale-105"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmF3fFkbbWxGdJAl6yZhmJnm9bXvH8zt3Z_YFryjFw_wo4W4H4gjKEE6fusAL7zIqwEysxfOjWgz6ETBjn6UbBj4HIeJV2Yf1iSVaLHh0zWkQuLqeGiYDQ0g_LUYCGzzkcQ4sI2A2-k1gGrNObtRMPl7dVtOOGrRAPlzMN7wnuFpCx3LUTl3gdBOtqs-_iJxr4Sbkc3W7rXspoLjDkRpuKK2ch2qltWDuFA_Ra7qdqENXTPaE-f8Ep_5mLQTJ7u6ZFL2LjRpu64BAW" />
                    </div>
                </div>
            </section>
            <section class="py-20 sm:py-28 bg-[var(--secondary-color)]">
                <div class="container mx-auto px-6">
                    <div class="text-center">
                        <h2 class="text-3xl font-bold tracking-tighter text-[var(--text-primary)] sm:text-4xl">
                            Everything You Need to Succeed
                        </h2>
                        <p class="mt-4 max-w-2xl mx-auto text-lg text-[var(--text-secondary)]">
                            Our platform is packed with powerful features to make your job
                            prep seamless and effective.
                        </p>
                    </div>
                    <div class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div
                            class="transform rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl">
                            <div
                                class="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-color)] text-[var(--primary-color)]">
                                <span class="material-icons">person_search</span>
                            </div>
                            <h3 class="mt-6 text-xl font-bold">Personalized Practice</h3>
                            <p class="mt-2 text-[var(--text-secondary)]">
                                Practice with interview questions specifically tailored to your
                                target role and industry.
                            </p>
                        </div>
                        <div
                            class="transform rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl">
                            <div
                                class="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-color)] text-[var(--primary-color)]">
                                <span class="material-icons">reviews</span>
                            </div>
                            <h3 class="mt-6 text-xl font-bold">Expert Feedback</h3>
                            <p class="mt-2 text-[var(--text-secondary)]">
                                Receive detailed, actionable feedback on your answers from our
                                AI and human experts.
                            </p>
                        </div>
                        <div
                            class="transform rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl">
                            <div
                                class="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-color)] text-[var(--primary-color)]">
                                <span class="material-icons">lightbulb</span>
                            </div>
                            <h3 class="mt-6 text-xl font-bold">Interview Tips</h3>
                            <p class="mt-2 text-[var(--text-secondary)]">
                                Access a rich library of tips, strategies, and frameworks to
                                master any interview scenario.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-20 sm:py-28">
                <div class="container mx-auto px-6">
                    <div class="text-center">
                        <h2 class="text-3xl font-bold tracking-tighter text-[var(--text-primary)] sm:text-4xl">Get
                            Started in 3 Simple Steps</h2>
                        <p class="mt-4 max-w-2xl mx-auto text-lg text-[var(--text-secondary)]">Your journey to interview
                            mastery is just a few clicks away.</p>
                    </div>
                    <div class="relative mt-20">
                        <div
                            class="absolute left-1/2 top-10 hidden h-full w-px -translate-x-1/2 border-l-2 border-dashed border-gray-300 lg:block">
                        </div>
                        <div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
                            <div class="relative text-center lg:text-left">
                                <div class="flex items-center justify-center lg:justify-start">
                                    <div
                                        class="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--primary-color)] text-2xl font-bold text-white shadow-lg">
                                        1</div>
                                    <div class="hidden w-full border-t-2 border-dashed border-gray-300 lg:block ml-4">
                                    </div>
                                </div>
                                <h3 class="mt-6 text-xl font-bold">Create Your Profile</h3>
                                <p class="mt-2 text-[var(--text-secondary)]">Sign up and tell us about your career
                                    goals. We'll customize your preparation plan.</p>
                                <img alt="Illustration for creating profile"
                                    class="mt-6 w-full h-48 object-cover rounded-2xl shadow-xl"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxMYxUAfBGdUSbzT5XlU_ERgpPgl81m4i_xu2v-fxzMiQZp4sViUWvk8Ta8FV4r24iR8AXncuUjYK96JwDQL4HLlrK3MFG666eV42UBys20xNhda0HVoUHD9a-hPwzFD2BzeU4n8wMmUVk_ErvYFpvzjZm2ElVhvRc4fa102tZmUiQJKxbZdV6oZivw460QBG1CAxdTaXJBP2lKhOoPGB9qDAk0zxgStZHdgP7H6NZyBBsCw3htqamq2r6Vg47Cd0o_zFuyNydr_Ee" />
                            </div>
                            <div class="relative text-center lg:text-left lg:mt-24">
                                <div class="flex items-center justify-center lg:justify-start">
                                    <div
                                        class="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--primary-color)] text-2xl font-bold text-white shadow-lg">
                                        2</div>
                                    <div class="hidden w-full border-t-2 border-dashed border-gray-300 lg:block ml-4">
                                    </div>
                                </div>
                                <h3 class="mt-6 text-xl font-bold">Practice with AI</h3>
                                <p class="mt-2 text-[var(--text-secondary)]">Engage with our smart AI that simulates
                                    real interviews and provides instant feedback.</p>
                                <img alt="Illustration for AI practice"
                                    class="mt-6 w-full h-48 object-cover rounded-2xl shadow-xl"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxA2sUsKriQEQmDp1iZwenWHL9lGZcvIhxIrt6tWCruDJGeG5UVGsblKdFArkQ8PP69pXsoyfDeOhMD_gXJXVTHIkigyaCGUVe7w0yatLHYXeEX3u1DxutR_oMUijHUrUbtJs4HNCOe3-FGfMDL-gGoPABS2wWnpQZ7haJaoYp6KpGSS5JIQvRkk_Uc4qhyKH5mnI-LZzbjcMyFU49QgPJX150pfmd5zGvoDjj_SMNUuMx9JOCO9B50qfrb9l2zG5fBAbyBR7L4etL" />
                            </div>
                            <div class="relative text-center lg:text-left lg:mt-48">
                                <div class="flex items-center justify-center lg:justify-start">
                                    <div
                                        class="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--primary-color)] text-2xl font-bold text-white shadow-lg">
                                        3</div>
                                </div>
                                <h3 class="mt-6 text-xl font-bold">Get Expert Coaching</h3>
                                <p class="mt-2 text-[var(--text-secondary)]">Book one-on-one sessions with industry
                                    experts to refine your interview skills.</p>
                                <img alt="Illustration for expert coaching"
                                    class="mt-6 w-full h-48 object-cover rounded-2xl shadow-xl"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgvj4qL1i4SV2pA2469A3YSnu1_vpka8tPJqlkL0zwmqkWNed8iwE7W4aHlhHl4a4Ml-pxWCkfuTk9jiaYfhOwkwB-4Kqi1_AcWmq2yvaRRgxJk1C4sjhaABF4C3klS_vG_7R84VwNgSDgWGFmXy-G4k1RrysRCzjyh0bmI8YM_hz5_ndog02gy4wr1MD_cmXC_dtkWBOIdIXf7ff9ReRMlnAsOFS31Bf5QMAwiWqL-C5lFgS8T-mpKwGQXZBhwbIMVnNv214qDHWb" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="bg-[var(--secondary-color)] py-20 sm:py-28">
                <div class="container mx-auto px-6">
                    <div class="text-center">
                        <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl">
                            Loved by Students Worldwide
                        </h2>
                        <p class="mt-4 max-w-2xl mx-auto text-lg text-[var(--text-secondary)]">
                            Don't just take our word for it. Hear what our successful users
                            have to say.
                        </p>
                    </div>
                    <div class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div class="rounded-2xl bg-white p-8 shadow-lg">
                            <div class="flex items-center gap-4">
                                <img alt="Avatar of Sarah M." class="h-14 w-14 rounded-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMHTre9R3VxWrk3D_kEuijJFduZUPGVra1zOFEbkUVcCFu3gnv-bluvXku-U6X36Wx09jTB5rtanh_7B43cI-HebW0p9bmq7io82YNxSWXIZiDkF3P8hAsE98_r_g9J9prVj3nCPoG2cPyxlfn31j6DUpMs2-FGjI9iJKBxLUxQDp_uYHSmgBicZtqij0kWLDZtI1_LMbJ46wEZLLcgtB8AzFLCVk8shWvkNgM_KKfQI8UBi4lqRjCYJJP0yf8nX1gyIiC6hUxuRvL" />
                                <div>
                                    <p class="font-bold">Sarah M.</p>
                                    <p class="text-sm text-[var(--text-secondary)]">Software Engineer</p>
                                </div>
                            </div>
                            <p class="mt-6 text-[var(--text-secondary)]">
                                "JobPrep was a game-changer. The AI mock interviews were
                                incredibly realistic and helped me pinpoint my weaknesses. I
                                landed a job at my dream company!"
                            </p>
                        </div>
                        <div class="rounded-2xl bg-white p-8 shadow-lg">
                            <div class="flex items-center gap-4">
                                <img alt="Avatar of David L." class="h-14 w-14 rounded-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJZ8udDUIKNElh7HQ24j6n07r6mFiG1pum7Db9IQfcWb24LaHIxAxT7ToOMmygJP7X36DH9bl4rIvepSzYCDFV_S27Mh83YGkBFbDKQu4qCRB7xVgdH4JjAth3Ia8IdbHEgnuQCeNd4pUbYJEuFDRrR-FjlIGrjLuE9qb4oEeiC9kOgWc-3c-Smdoo3ZPYOK2AcBO1QXTnucagyUNQv2sKip39hOV2ukYnf7FzIzBbSzDGn0J77OlXsIPRt1zErbj0zegAhW_WAoOm" />
                                <div>
                                    <p class="font-bold">David L.</p>
                                    <p class="text-sm text-[var(--text-secondary)]">Product Manager</p>
                                </div>
                            </div>
                            <p class="mt-6 text-[var(--text-secondary)]">
                                "The expert coaching sessions were invaluable. My coach gave me
                                the confidence and frameworks I needed to tackle any question.
                                Highly recommended."
                            </p>
                        </div>
                        <div class="rounded-2xl bg-white p-8 shadow-lg">
                            <div class="flex items-center gap-4">
                                <img alt="Avatar of Emily R." class="h-14 w-14 rounded-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw7Joi5ZpJ9-mgatb3vMyrWhkap3ttYG6j4cAZ_KmLeNQfEQz5487LTKnYpUeWa6mohnGWUsW7Dsho_OnVLfV0_nM5ieiY_Y6gmZIHOxadtRBAwBmGBXQTcVBKPS_Q7t6Qz5-9QLI-J6rwoE6st-GAMmXJt0heTbrY-z_yqW9l9-_W9E3sZI6N8FQ4C5BUw2NralTjFWvcfyp9YJlHOTzXRRQceeJrOP_5vASD_KFd8mVvUB2PU1mDHsz9w7TvRNaVehtHOahMb6hO" />
                                <div>
                                    <p class="font-bold">Emily R.</p>
                                    <p class="text-sm text-[var(--text-secondary)]">UX Designer</p>
                                </div>
                            </div>
                            <p class="mt-6 text-[var(--text-secondary)]">
                                "I used to get so nervous before interviews. JobPrep's practice
                                tools helped me build confidence and communicate my skills
                                effectively. Thank you!"
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-20 sm:py-28">
                <div class="container mx-auto px-6">
                    <div class="rounded-2xl bg-[var(--primary-color)] p-10 text-center text-white md:p-16">
                        <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl">
                            Ready to Ace Your Next Interview?
                        </h2>
                        <p class="mt-4 max-w-2xl mx-auto text-lg opacity-80">
                            Join thousands of students who have landed their dream jobs with
                            JobPrep. Your future starts now.
                        </p>
                        <button
                            class="mt-10 flex cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-white px-8 py-3.5 text-base font-bold text-[var(--primary-color)] shadow-lg transition-transform hover:scale-105 mx-auto">
                            Get Started for Free
                        </button>
                        <div class="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                            <div class="flex items-center gap-2 text-sm opacity-80">
                                <span class="material-icons text-base">check_circle</span>
                                <span>Free Trial Available</span>
                            </div>
                            <div class="flex items-center gap-2 text-sm opacity-80">
                                <span class="material-icons text-base">credit_card_off</span>
                                <span>No Credit Card Required</span>
                            </div>
                            <div class="flex items-center gap-2 text-sm opacity-80">
                                <span class="material-icons text-base">verified_user</span>
                                <span>Trusted by Top Universities</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <footer class="bg-gray-50">
            <div class="container mx-auto px-6 py-12">
                <div class="grid grid-cols-1 gap-8 lg:grid-cols-4">
                    <div>
                        <div class="flex items-center gap-3">
                            <svg class="h-8 w-8 text-[var(--primary-color)]" fill="none" viewBox="0 0 48 48"
                                xmlns="http://www.w3.org/2000/svg">
                                <path clip-rule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                                    fill="currentColor" fill-rule="evenodd"></path>
                            </svg>
                            <h2 class="text-2xl font-bold tracking-tighter">JobPrep</h2>
                        </div>
                        <p class="mt-4 text-sm text-[var(--text-secondary)]">Your personal interview coach to help you
                            land your dream job.</p>
                    </div>
                    <div>
                        <p class="font-bold">Company</p>
                        <nav class="mt-4 flex flex-col gap-3">
                            <a class="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--primary-color)]"
                                href="#">About Us</a>
                            <a class="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--primary-color)]"
                                href="#">Careers</a>
                            <a class="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--primary-color)]"
                                href="#">Press</a>
                        </nav>
                    </div>
                    <div>
                        <p class="font-bold">Resources</p>
                        <nav class="mt-4 flex flex-col gap-3">
                            <a class="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--primary-color)]"
                                href="#">Blog</a>
                            <a class="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--primary-color)]"
                                href="#">Help Center</a>
                            <a class="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--primary-color)]"
                                href="#">Contact Us</a>
                        </nav>
                    </div>
                    <div>
                        <p class="font-bold">Legal</p>
                        <nav class="mt-4 flex flex-col gap-3">
                            <a class="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--primary-color)]"
                                href="#">Terms of Service</a>
                            <a class="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--primary-color)]"
                                href="#">Privacy Policy</a>
                        </nav>
                    </div>
                </div>
                <div
                    class="mt-12 border-t border-gray-200 pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <p class="text-sm text-[var(--text-secondary)]">© 2024 JobPrep. All rights reserved.</p>
                    <div class="flex gap-4">
                        <a class="text-[var(--text-secondary)] transition-colors hover:text-[var(--primary-color)]"
                            href="#">
                            <svg aria-hidden="true" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path clip-rule="evenodd"
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                    fill-rule="evenodd"></path>
                            </svg>
                        </a>
                        <a class="text-[var(--text-secondary)] transition-colors hover:text-[var(--primary-color)]"
                            href="#">
                            <svg aria-hidden="true" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
                                </path>
                            </svg>
                        </a>
                        <a class="text-[var(--text-secondary)] transition-colors hover:text-[var(--primary-color)]"
                            href="#">
                            <svg aria-hidden="true" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path clip-rule="evenodd"
                                    d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM8.21 10.891V7.716h1.562v3.175H8.21zm.781-4.212a.98.98 0 110-1.96.98.98 0 010 1.96zm4.25 4.212V7.716h1.562v2.885c0 .81.42 1.282 1.112 1.282.793 0 1.032-.577 1.032-1.346V7.716h1.562v3.313c0 1.83-1.043 2.652-2.457 2.652-1.192 0-1.78-.67-2.083-1.285h-.028v1.127H13.24z"
                                    fill-rule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </div>

</template>
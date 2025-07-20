<template>
    <div class="min-h-screen bg-white font-sans overflow-x-hidden">
        <!-- Hero Section -->
        <section class="pt-12 pb-16 px-6 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-32">
                    <div ref="heroContent" class="opacity-0">
                        <!-- Floating badges -->
                        <div class="flex justify-center mb-8">
                            <div
                                class="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold animate-bounce">
                                🚀 Trusted by 10,000+ Students
                            </div>
                        </div>

                        <h1 class="text-4xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                            Land Your Dream Job, Faster.
                        </h1>

                        <p class="text-md md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                            JobPrep is your personal interview coach. Get AI-powered
                            practice, expert feedback, and proven strategies to ace your
                            next interview.
                        </p>

                        <div class="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                            <ButtonHome ref="mainCTA" />
                        </div>
                    </div>
                </div>

                <!-- Stats Marquee -->
                <div ref="heroContent2" class="relative overflow-hidden bg-white rounded-3xl shadow-xl p-8 mb-16">
                    <div ref="marqueeContainer" class="flex space-x-12 animate-marquee">
                        <div class="flex items-center space-x-12 whitespace-nowrap">
                            <div class="flex items-center space-x-4">
                                <div class="w-12 h-12 rounded-full flex items-center justify-center">
                                    <img src="/public/3d-icon-target.png" alt="">
                                </div>
                                <div>
                                    <div class="text-2xl font-bold text-gray-900">95%</div>
                                    <div class="text-gray-600">Success Rate</div>
                                </div>
                            </div>

                            <div class="flex items-center space-x-4">
                                <div class="w-12 h-12 rounded-full flex items-center justify-center">
                                    <img src="/public/3d-icon-person.png" alt="">
                                </div>
                                <div>
                                    <div class="text-2xl font-bold text-gray-900">10,000+</div>
                                    <div class="text-gray-600">Students Helped</div>
                                </div>
                            </div>

                            <div class="flex items-center space-x-4">
                                <div class="w-12 h-12rounded-full flex items-center justify-center">
                                    <img src="/public/3d-icon-24hour.png" alt="">
                                </div>
                                <div>
                                    <div class="text-2xl font-bold text-gray-900">24/7</div>
                                    <div class="text-gray-600">AI Support</div>
                                </div>
                            </div>

                            <div class="flex items-center space-x-4">
                                <div class="w-12 h-12 rounded-full flex items-center justify-center">
                                    <img src="/public/3d-icon-checklist.png" alt="">
                                </div>
                                <div>
                                    <div class="text-2xl font-bold text-gray-900">2 Weeks</div>
                                    <div class="text-gray-600">Average to Job</div>
                                </div>
                            </div>
                        </div>
                        <!-- Duplicate for seamless loop -->
                        <div class="flex items-center space-x-12 whitespace-nowrap">
                            <div class="flex items-center space-x-4">
                                <div class="w-12 h-12 rounded-full flex items-center justify-center">
                                    <img src="/public/3d-icon-target.png" alt="">
                                </div>
                                <div>
                                    <div class="text-2xl font-bold text-gray-900">95%</div>
                                    <div class="text-gray-600">Success Rate</div>
                                </div>
                            </div>

                            <div class="flex items-center space-x-4">
                                <div class="w-12 h-12 rounded-full flex items-center justify-center">
                                    <img src="/public/3d-icon-person.png" alt="">
                                </div>
                                <div>
                                    <div class="text-2xl font-bold text-gray-900">10,000+</div>
                                    <div class="text-gray-600">Students Helped</div>
                                </div>
                            </div>

                            <div class="flex items-center space-x-4">
                                <div class="w-12 h-12rounded-full flex items-center justify-center">
                                    <img src="/public/3d-icon-24hour.png" alt="">
                                </div>
                                <div>
                                    <div class="text-2xl font-bold text-gray-900">24/7</div>
                                    <div class="text-gray-600">AI Support</div>
                                </div>
                            </div>

                            <div class="flex items-center space-x-4">
                                <div class="w-12 h-12 rounded-full flex items-center justify-center">
                                    <img src="/public/3d-icon-checklist.png" alt="">
                                </div>
                                <div>
                                    <div class="text-2xl font-bold text-gray-900">2 Weeks</div>
                                    <div class="text-gray-600">Average to Job</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section id="features" class="py-20 px-6 bg-gray-50">
            <div class="max-w-7xl mx-auto">
                <div class="grid lg:grid-cols-3 gap-8">
                    <div ref="feature1" class="group opacity-0 transform translate-y-8">
                        <div
                            class="bg-white rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 relative overflow-hidden">
                            <div
                                class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full -translate-y-16 translate-x-16 opacity-50">
                            </div>
                            <div class="relative z-10">
                                <div
                                    class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-4">Personalized Practice</h3>
                                <p class="text-gray-600 leading-relaxed mb-6">
                                    Practice with interview questions specifically tailored to your target role and
                                    industry.
                                </p>
                                <div
                                    class="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                                    Learn More
                                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref="feature2" class="group opacity-0 transform translate-y-8">
                        <div
                            class="bg-white rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 relative overflow-hidden">
                            <div
                                class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-full -translate-y-16 translate-x-16 opacity-50">
                            </div>
                            <div class="relative z-10">
                                <div
                                    class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-4">Expert Feedback</h3>
                                <p class="text-gray-600 leading-relaxed mb-6">
                                    Receive detailed, actionable feedback on your answers from our AI and human experts.
                                </p>
                                <div
                                    class="flex items-center text-green-600 font-semibold group-hover:translate-x-2 transition-transform">
                                    Learn More
                                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref="feature3" class="group opacity-0 transform translate-y-8">
                        <div
                            class="bg-white rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 relative overflow-hidden">
                            <div
                                class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full -translate-y-16 translate-x-16 opacity-50">
                            </div>
                            <div class="relative z-10">
                                <div
                                    class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-4">Interview Tips</h3>
                                <p class="text-gray-600 leading-relaxed mb-6">
                                    Access a rich library of tips, strategies, and frameworks to master any interview
                                    scenario.
                                </p>
                                <div
                                    class="flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition-transform">
                                    Learn More
                                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Steps Section -->
        <section id="steps" class="py-20 px-6 bg-white">
            <div class="max-w-7xl mx-auto">
                <div ref="stepsHeader" class="text-center mb-20 opacity-0">
                    <h2 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Get Hired in
                        <span class="bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">5
                            Simple Steps</span>
                    </h2>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                        Follow our proven path to career success, simplified for you.
                    </p>
                </div>

                <!-- Bento Grid Layout -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-fr">
                    <!-- Step 1 - Large Featured Card (spans 2 columns, 2 rows) -->
                    <div ref="step1" class="md:col-span-2 md:row-span-2 opacity-0 transform translate-y-8">
                        <div class="relative h-full min-h-[320px]">
                            <div
                                class="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                                1
                            </div>
                            <div
                                class="relative overflow-hidden w-full h-full rounded-3xl cursor-pointer text-2xl font-bold bg-white shadow-lg border border-gray-100">
                                <div class="z-10 absolute w-full h-full peer"></div>
                                <div
                                    class="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-blue-600 transition-all duration-500">
                                </div>
                                <div
                                    class="absolute flex text-white text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-blue-600 transition-all duration-500">
                                    Create Your Profile<br />& Start Journey
                                </div>
                                <div class="w-full h-full items-center justify-center flex p-8">
                                    <div class="text-center">
                                        <div
                                            class="w-56 h-56 mx-auto mb-4 shadow-2xl shadow-blue-200/60 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                                            <img src="/public/3d-register.png" alt="" />
                                        </div>
                                        <!-- <h3 class="text-2xl font-bold text-gray-900 mb-2">Create Profile</h3> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Step 2 - Practice with AI -->
                    <div ref="step2" class="md:col-span-1 opacity-0 transform translate-y-8">
                        <div class="relative h-full min-h-[150px]">
                            <div
                                class="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                                2
                            </div>
                            <div
                                class="relative overflow-hidden w-full h-full rounded-2xl cursor-pointer text-lg font-bold bg-white shadow-lg border border-gray-100">
                                <div class="z-10 absolute w-full h-full peer"></div>
                                <div
                                    class="absolute peer-hover:-top-16 peer-hover:-left-12 peer-hover:w-[130%] peer-hover:h-[130%] -top-24 -left-12 w-24 h-32 rounded-full bg-green-600 transition-all duration-500">
                                </div>
                                <div
                                    class="absolute flex text-white text-sm text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-24 -right-12 w-28 h-32 rounded-full bg-green-600 transition-all duration-500">
                                    Get Ai feedback<br />to Perfect it.
                                </div>
                                <div class="w-full h-full items-center justify-center flex p-6">
                                    <div class="text-center">
                                        <div
                                            class="w-48 h-48 mx-auto mb-4 shadow-2xl shadow-blue-200/60 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center">
                                            <img src="/public/3d-resume-analyzer.png" alt="" />
                                            <!-- <h3 class="text-2xl font-bold text-gray-900 mb-2">Analyze Resume</h3> -->
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Step 3 - Expert Coaching -->
                    <div ref="step3" class="md:col-span-1 opacity-0 transform translate-y-8">
                        <div class="relative h-full min-h-[150px]">
                            <div
                                class="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                                3
                            </div>
                            <div
                                class="relative overflow-hidden w-full h-full rounded-2xl cursor-pointer text-lg font-bold bg-white shadow-lg border border-gray-100">
                                <div class="z-10 absolute w-full h-full peer"></div>
                                <div
                                    class="absolute peer-hover:-top-16 peer-hover:-left-12 peer-hover:w-[130%] peer-hover:h-[130%] -top-24 -left-12 w-24 h-32 rounded-full bg-purple-600 transition-all duration-500">
                                </div>
                                <div
                                    class="absolute flex text-white text-sm text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-24 -right-12 w-28 h-32 rounded-full bg-purple-600 transition-all duration-500">
                                    One-on-One with Ai On <br />Expert Sessions
                                </div>
                                <div class="w-full h-full items-center justify-center flex p-6">
                                    <div class="text-center">
                                        <div
                                            class="w-48 h-48 mx-auto mb-4 shadow-2xl shadow-blue-200/60 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center">
                                            <img src="/public/3d-interview.png" alt="" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Step 4 - Mock Interviews -->
                    <div ref="step4" class="md:col-span-1 opacity-0 transform translate-y-8">
                        <div class="relative h-full min-h-[150px]">
                            <div
                                class="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                                4
                            </div>
                            <div
                                class="relative overflow-hidden w-full h-full rounded-2xl cursor-pointer text-lg font-bold bg-white shadow-lg border border-gray-100">
                                <div class="z-10 absolute w-full h-full peer"></div>
                                <div
                                    class="absolute peer-hover:-top-16 peer-hover:-left-12 peer-hover:w-[130%] peer-hover:h-[130%] -top-24 -left-12 w-24 h-32 rounded-full bg-orange-600 transition-all duration-500">
                                </div>
                                <div
                                    class="absolute flex text-white text-sm text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-24 -right-12 w-28 h-32 rounded-full bg-orange-600 transition-all duration-500">
                                Find Jobs Easily<br />& Apply Instantly
                                </div>
                                <div class="w-full h-full items-center justify-center flex p-6">
                                    <div class="text-center">
                                        <div
                                            class="w-48 h-48 mx-auto mb-4 shadow-2xl shadow-blue-200/60 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center">
                                            <img src="/public/3d-find-job.png" alt="" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Step 5 - Land Your Job -->
                    <div ref="step5" class="md:col-span-1 opacity-0 transform translate-y-8">
                        <div class="relative h-full min-h-[150px]">
                            <div
                                class="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                                5
                            </div>
                            <div
                                class="relative overflow-hidden w-full h-full rounded-2xl cursor-pointer text-lg font-bold bg-white shadow-lg border border-gray-100">
                                <div class="z-10 absolute w-full h-full peer"></div>
                                <div
                                    class="absolute peer-hover:-top-16 peer-hover:-left-12 peer-hover:w-[130%] peer-hover:h-[130%] -top-24 -left-12 w-24 h-32 rounded-full bg-red-600 transition-all duration-500">
                                </div>
                                <div
                                    class="absolute flex text-white text-sm text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-24 -right-12 w-28 h-32 rounded-full bg-red-600 transition-all duration-500">
                                    Generate Your CV<br />with Proven ATS Template
                                </div>
                                <div class="w-full h-full items-center justify-center flex p-6">
                                    <div class="text-center">
                                        <div
                                            class="w-48 h-48 mx-auto mb-4 shadow-2xl shadow-blue-200/60 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center">
                                            <img src="/public/3d-resume-generator.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials Section with Infinite Scroll -->
        <section id="testimonials" class="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
            <div class="max-w-7xl mx-auto">
                <div ref="testimonialsHeader" class="text-center mb-16 opacity-0">
                    <h2 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Loved by Students
                        <span
                            class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Worldwide</span>
                    </h2>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                        Don't just take our word for it. Hear what our successful users have to say.
                    </p>
                </div>

                <!-- Infinite Scroll Testimonials -->
                <div class="relative overflow-hidden">
                    <div ref="testimonialScroll" class="flex space-x-6 animate-scroll">
                        <!-- First set -->
                        <div class="flex space-x-6 min-w-full">
                            <div
                                class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 min-w-[400px] border border-gray-100">
                                <div class="flex items-center mb-6">
                                    <div
                                        class="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                        S
                                    </div>
                                    <div class="ml-4">
                                        <h4 class="font-bold text-gray-900 text-lg">Sarah M.</h4>
                                        <p class="text-gray-600">Software Engineer</p>
                                    </div>
                                </div>
                                <p class="text-gray-700 leading-relaxed mb-4">
                                    "JobPrep was a game-changer. The AI mock interviews were incredibly realistic, and I
                                    nailed my weaknesses. I landed a job at my dream company!"
                                </p>
                                <div class="flex text-yellow-400">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </div>

                            <div
                                class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 min-w-[400px] border border-gray-100">
                                <div class="flex items-center mb-6">
                                    <div
                                        class="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                        D
                                    </div>
                                    <div class="ml-4">
                                        <h4 class="font-bold text-gray-900 text-lg">David L.</h4>
                                        <p class="text-gray-600">Product Manager</p>
                                    </div>
                                </div>
                                <p class="text-gray-700 leading-relaxed mb-4">
                                    "The expert coaching sessions were invaluable. My coach gave me the confidence and
                                    frameworks I needed to tackle any question. Highly recommended!"
                                </p>
                                <div class="flex text-yellow-400">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </div>

                            <div
                                class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 min-w-[400px] border border-gray-100">
                                <div class="flex items-center mb-6">
                                    <div
                                        class="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                        E
                                    </div>
                                    <div class="ml-4">
                                        <h4 class="font-bold text-gray-900 text-lg">Emily R.</h4>
                                        <p class="text-gray-600">UX Designer</p>
                                    </div>
                                </div>
                                <p class="text-gray-700 leading-relaxed mb-4">
                                    "I used to get so nervous before interviews. JobPrep's practice tools helped me
                                    build confidence and communicate my skills effectively. Thank you!"
                                </p>
                                <div class="flex text-yellow-400">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <!-- Duplicate set for seamless loop -->
                        <div class="flex space-x-6 min-w-full">
                            <div
                                class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 min-w-[400px] border border-gray-100">
                                <div class="flex items-center mb-6">
                                    <div
                                        class="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                        S
                                    </div>
                                    <div class="ml-4">
                                        <h4 class="font-bold text-gray-900 text-lg">Sarah M.</h4>
                                        <p class="text-gray-600">Software Engineer</p>
                                    </div>
                                </div>
                                <p class="text-gray-700 leading-relaxed mb-4">
                                    "JobPrep was a game-changer. The AI mock interviews were incredibly realistic, and I
                                    nailed my weaknesses. I landed a job at my dream company!"
                                </p>
                                <div class="flex text-yellow-400">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </div>

                            <div
                                class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 min-w-[400px] border border-gray-100">
                                <div class="flex items-center mb-6">
                                    <div
                                        class="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                        D
                                    </div>
                                    <div class="ml-4">
                                        <h4 class="font-bold text-gray-900 text-lg">David L.</h4>
                                        <p class="text-gray-600">Product Manager</p>
                                    </div>
                                </div>
                                <p class="text-gray-700 leading-relaxed mb-4">
                                    "The expert coaching sessions were invaluable. My coach gave me the confidence and
                                    frameworks I needed to tackle any question. Highly recommended!"
                                </p>
                                <div class="flex text-yellow-400">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </div>

                            <div
                                class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 min-w-[400px] border border-gray-100">
                                <div class="flex items-center mb-6">
                                    <div
                                        class="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                        E
                                    </div>
                                    <div class="ml-4">
                                        <h4 class="font-bold text-gray-900 text-lg">Emily R.</h4>
                                        <p class="text-gray-600">UX Designer</p>
                                    </div>
                                </div>
                                <p class="text-gray-700 leading-relaxed mb-4">
                                    "I used to get so nervous before interviews. JobPrep's practice tools helped me
                                    build confidence and communicate my skills effectively. Thank you!"
                                </p>
                                <div class="flex text-yellow-400">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Final CTA Section -->
        <section class="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
            <!-- Background decorations -->
            <div class="absolute inset-0">
                <div class="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-48 -translate-y-48">
                </div>
                <div class="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-48 translate-y-48">
                </div>
            </div>

            <div class="max-w-4xl mx-auto text-center relative z-10">
                <div ref="finalCTA" class="opacity-0">
                    <h2 class="text-5xl md:text-6xl font-bold text-white mb-6">
                        Ready to Ace Your
                        <span class="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                            Next Interview?
                        </span>
                    </h2>
                    <p class="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Join thousands of students who have landed their dream jobs with JobPrep.
                        Your future starts now.
                    </p>

                    <div class="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                        <button ref="finalCTAButton"
                            class="group bg-white text-blue-600 px-12 py-5 rounded-2xl text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/25 flex items-center gap-3">
                            Get Started for Free
                            <svg class="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </div>

                    <div class="flex flex-col sm:flex-row items-center justify-center gap-8 text-blue-100">
                        <div class="flex items-center gap-2">
                            <svg class="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>Free trial available</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <svg class="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>No Credit Card Required</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <svg class="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>Trusted by Top Universities</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-gray-900 py-16 px-6">
            <div class="max-w-7xl mx-auto">
                <div class="grid md:grid-cols-4 gap-8 mb-12">
                    <!-- Company -->
                    <div>
                        <div class="flex items-center space-x-3 mb-6">
                            <div
                                class="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                                <span class="text-white font-bold text-lg">JP</span>
                            </div>
                            <span class="text-2xl font-bold text-white">JobPrep</span>
                        </div>
                        <p class="text-gray-400 leading-relaxed mb-6">
                            Your personal interview coach to help you land your dream job.
                        </p>
                        <div class="flex space-x-4">
                            <a href="#"
                                class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-colors">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                            <a href="#"
                                class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-colors">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a href="#"
                                class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-colors">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <!-- Company Links -->
                    <div>
                        <h3 class="text-white font-semibold text-lg mb-6">Company</h3>
                        <ul class="space-y-4">
                            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Press</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <!-- Resources -->
                    <div>
                        <h3 class="text-white font-semibold text-lg mb-6">Resources</h3>
                        <ul class="space-y-4">
                            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Help Center</a>
                            </li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">API Docs</a></li>
                        </ul>
                    </div>

                    <!-- Legal -->
                    <div>
                        <h3 class="text-white font-semibold text-lg mb-6">Legal</h3>
                        <ul class="space-y-4">
                            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Terms of
                                    Service</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                            </li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
                            </li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">GDPR</a></li>
                        </ul>
                    </div>
                </div>

                <div class="border-t border-gray-800 pt-8 text-center">
                    <p class="text-gray-400">&copy; 2024 JobPrep. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ButtonHome from '~/components/button-home.vue'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

// Refs for elements
const navbar = ref(null)
const heroContent = ref(null)
const heroContent2 = ref(null)
const marqueeContainer = ref(null)
const feature1 = ref(null)
const feature2 = ref(null)
const feature3 = ref(null)
const stepsHeader = ref(null)
const step1 = ref(null)
const step2 = ref(null)
const step3 = ref(null)
const step4 = ref(null)
const step5 = ref(null)
const testimonialsHeader = ref(null)
const testimonialScroll = ref(null)
const finalCTA = ref(null)
const mainCTA = ref(null)
const finalCTAButton = ref(null)

// Reactive data
const scrolled = ref(false)

// Handle scroll for navbar
const handleScroll = () => {
    scrolled.value = window.scrollY > 50
}

onMounted(() => {
    // Add scroll listener
    window.addEventListener('scroll', handleScroll)

    // Initial animations
    const tl = gsap.timeline()

    // Hero content animation
    tl.fromTo(heroContent.value,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    ).fromTo(heroContent2.value,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=0.5"
    )


    // CTA button pulse animation
    gsap.to([mainCTA.value, finalCTAButton.value], {
        scale: 1.02,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
    })

    // Scroll-triggered animations
    gsap.fromTo([feature1.value, feature2.value, feature3.value],
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.2,
            scrollTrigger: {
                trigger: feature1.value,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    )

    // Steps header
    gsap.fromTo(stepsHeader.value,
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: stepsHeader.value,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    )

    // Steps staggered animation
    gsap.fromTo(
        [step1.value, step2.value, step3.value, step4?.value, step5?.value],
        { opacity: 0, x: 50 },
        {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.2,
            scrollTrigger: {
                trigger: step1.value,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    )

    // Testimonials header
    gsap.fromTo(testimonialsHeader.value,
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: testimonialsHeader.value,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    )

    // Final CTA animation
    gsap.fromTo(finalCTA.value,
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: finalCTA.value,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    )
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>

<style scoped>
.font-sans {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Marquee Animation */
@keyframes marquee {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

.animate-marquee {
    animation: marquee 30s linear infinite;
}

/* Infinite Scroll Animation */
@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-100%);
    }
}

.animate-scroll {
    animation: scroll 40s linear infinite;
}

/* Custom scrollbar */
::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
}

/* Hover effects */
.group:hover .group-hover\:translate-x-1 {
    transform: translateX(0.25rem);
}

.group:hover .group-hover\:translate-x-2 {
    transform: translateX(0.5rem);
}

.group:hover .group-hover\:scale-110 {
    transform: scale(1.1);
}

.group:hover .group-hover\:bg-blue-200 {
    background-color: rgb(191 219 254);
}
</style>
<template class="bg-white">
    <div class="flex flex-col min-h-screen">
        <header class="sticky top-0 z-20 bg-white/80 backdrop-blur-lg border-b border-[var(--border-color)]">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16">
                    <div class="flex items-center gap-4 text-[var(--text-primary)]">
                        <a class="flex items-center gap-2" href="#">
                            <svg class="h-8 w-8 text-[var(--primary-color)]" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                            </svg>
                            <h1 class="text-xl font-bold">JobPrep</h1>
                        </a>
                    </div>
                    <nav class="hidden md:flex items-center gap-8">
                        <a class="nav-link text-sm font-medium" href="#">Dashboard</a>
                        <a class="nav-link text-sm font-medium text-[var(--primary-color)] font-semibold" href="#">My
                            Documents</a>
                        <a class="nav-link text-sm font-medium" href="#">Templates</a>
                        <a class="nav-link text-sm font-medium" href="#">Resources</a>
                    </nav>
                    <div class="flex items-center gap-4">
                        <button
                            class="relative rounded-full p-2 text-[var(--text-secondary)] hover:bg-gray-100 hover:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-color)]">
                            <span class="sr-only">View notifications</span>
                            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341A6.002 6.002 0 006 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                            </svg>
                        </button>
                        <div class="relative">
                            <button
                                class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition">
                                <img alt="User profile" class="h-9 w-9 rounded-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaI0EWf65a2sUWiXYigecP-nn8PiECgdMeENcHExKVnR4b6sNIJ0kC1J-ue1EIP_y2eJFRdD4PqCVnv-0mPwTuQkQRgQW-C1JgySH4JupYHnMYvjhNAMGLnpZp-jm0uuSS_Gq_Lfc1GmPAd0RDiT__jAzI0LfkoxPa85pyIgrSkw7WmfzOmXaA-omUGC-cS3RYGqUIcicSZleZPa3UED5xnS8YpEc7sl8dWp37KYU_bUYhAuDG-R2Lyh51h6BD93KGWgHfR8IBKBLt" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <main class="flex-grow bg-[var(--background-light)]">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div class="lg:col-span-2 space-y-10">
                        <div class="space-y-2">
                            <div class="text-sm font-medium text-[var(--text-secondary)]">
                                <a class="hover:text-[var(--primary-color)]" href="#">Resume</a>
                                <span class="mx-2">/</span>
                                <span class="text-[var(--text-primary)]">Create New</span>
                            </div>
                            <h1 class="text-3xl md:text-4xl font-bold text-[var(--text-primary)] tracking-tight">Create
                                a New Resume</h1>
                            <p class="text-lg text-[var(--text-secondary)]">Follow the steps to build your professional
                                resume in minutes.</p>
                        </div>
                        <section id="step1">
                            <div class="flex items-center gap-4 mb-6">
                                <div
                                    class="flex items-center justify-center h-12 w-12 rounded-full bg-[var(--primary-color)] text-white font-bold text-xl">
                                    1</div>
                                <h2 class="text-2xl font-bold text-[var(--text-primary)]">Choose a Template</h2>
                            </div>
                            <div class="relative">
                                <div class="flex space-x-6 pb-4 overflow-x-auto">
                                    <div class="flex-shrink-0 w-48 space-y-3 template-card active">
                                        <div class="w-full h-64 bg-cover bg-center rounded-lg shadow-md"
                                            style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuArq2TkYt-DTqoTiWjlF8OOPSIg3nlyOIn4VBs0e6DoIwxz3IQaj78e4pvuCntZ3Ki-dx01wn3oy1zt30B9jIntrCqmGFthaJO1nxxXv6S6Oa4K4s_kpqYiich_WzOLXQoE0e2abyu2aHLQouL3h8yzBW1f7fR1bvnS64mRUcRypZX9OsXhhhcFKfYKgWPiBkwVuOA_WpirbPqJ5ebrNUVrNwbA9d_rUVYPHUA8MS6MuhT4HhFbB0AaVfQbWmftmLIVE60W0m_7vn1d");'>
                                        </div>
                                        <p class="text-center text-sm font-semibold text-[var(--text-primary)]">Modern
                                        </p>
                                    </div>
                                    <div class="flex-shrink-0 w-48 space-y-3 template-card">
                                        <div class="w-full h-64 bg-cover bg-center rounded-lg shadow-md"
                                            style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuChxN8LT0513X6ACukxI19XAy2waOQJTuQ_XZFyvvwBssTpAU5swVFWRdAYcK968rKqQjeqTMZ6vdjLnqeFqBpyyMjO8tYPJiA7tcijDCtiE-7jLvpZTVTM4IJJktfmeDSKn_dg1nLkzm1QmQhzJmyaa9Z7dPcLI303wIYwqnAytCBNruTDgdwfhiGBolP_4bUfabRZPHn1ydoJRKDkdiTw7gzSEdyy2_Wogs6e0k6cRvnTMnOrniDZwSDOb8juXWe6FKn5tKHhIwYL");'>
                                        </div>
                                        <p class="text-center text-sm font-semibold text-[var(--text-primary)]">Classic
                                        </p>
                                    </div>
                                    <div class="flex-shrink-0 w-48 space-y-3 template-card">
                                        <div class="w-full h-64 bg-cover bg-center rounded-lg shadow-md"
                                            style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDqFBhm0et8qiwZ1axwNoRR-nDCjm5ggfba2lTLgZMIhzYzuGOTat2ca1QjPw_WBgxLvRkcFlqnSImkoUp_H5v4vNW66gJmt3PoYnLTVYfu5rsNvFQ2EEaHLGxYEqoW13dd48a9kziSZ3oA7ugAb_8s4N3ywVF7qEoNAKYvpA_XA3rS1PyNq5qDZ-EHXFkXYXi7445yd5naZv9iSVMLtG_Y8mHlzBauFc7lXUF9KQGgZQ7Ey2xQ22Em7RVS7O9Yaedit668ygT3bw-h");'>
                                        </div>
                                        <p class="text-center text-sm font-semibold text-[var(--text-primary)]">
                                            Minimalist</p>
                                    </div>
                                    <div class="flex-shrink-0 w-48 space-y-3 template-card">
                                        <div class="w-full h-64 bg-cover bg-center rounded-lg shadow-md"
                                            style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDdpT1ua1lXTSjR1v4RC2iFqsuFwOYA8b6jIMwxBKJW1dp3UOvIqmDLpJj_ExD41uiJudKFRyqqzooRuSZ9OxIoQwLSLvUfh1LxUuf3OvFs0ZrZXJ6gJhRmqlD7WKMYnS7VefSADzX6acougako2ooosZoOTEuRy9xcLSgLaWAUh34unnc8MVRmeT2zniH-X9pGtSJjTKlOtUkNmeBdbbA_cHLQxOD8hVLufybTB4M74HG3OFd2R4sYrIXKMwHTzrGf4kqnuu0kvzKH");'>
                                        </div>
                                        <p class="text-center text-sm font-semibold text-[var(--text-primary)]">Creative
                                        </p>
                                    </div>
                                    <div class="flex-shrink-0 w-48 space-y-3 template-card">
                                        <div class="w-full h-64 bg-cover bg-center rounded-lg shadow-md"
                                            style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDeebx189PQ2_BGS50l2-HgJ3LQU-mI9xfHkp8FbMmcirPUQZh7UDfkB2LXAfa_a1TzGpUSu_x6R5Er9XW6UgeHldgN8YosDUcM4IerYHVI1C0HoVtalOwagQfDCpms5xvBbOap4f3x4WrGSALOKLDqrZlDF2c2-AcLk4O98EPtzrR_yef2wZZA8BotlLeSeUQUsavVzZ_5ShBSL4f7BwnSlvE2pHThyjWApRKl7YpMtcF_Ah_HfFLkn9Uw-KJHIssGCtGmrW6Zi8HW");'>
                                        </div>
                                        <p class="text-center text-sm font-semibold text-[var(--text-primary)]">
                                            Professional</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="step2">
                            <div class="flex items-center gap-4 mb-6">
                                <div
                                    class="flex items-center justify-center h-12 w-12 rounded-full bg-[var(--primary-color)] text-white font-bold text-xl">
                                    2</div>
                                <h2 class="text-2xl font-bold text-[var(--text-primary)]">Fill in Your Information</h2>
                            </div>
                            <div class="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-[var(--border-color)]">
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label class="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                                            for="full-name">Full Name</label>
                                        <input
                                            class="form-input w-full rounded-md border-[var(--border-color)] focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition duration-200"
                                            id="full-name" placeholder="e.g. Jane Doe" type="text" />
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                                            for="job-title">Job Title</label>
                                        <input
                                            class="form-input w-full rounded-md border-[var(--border-color)] focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition duration-200"
                                            id="job-title" placeholder="e.g. Product Manager" type="text" />
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                                            for="email">Email</label>
                                        <input
                                            class="form-input w-full rounded-md border-[var(--border-color)] focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition duration-200"
                                            id="email" placeholder="e.g. jane.doe@example.com" type="email" />
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                                            for="phone">Phone Number</label>
                                        <input
                                            class="form-input w-full rounded-md border-[var(--border-color)] focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition duration-200"
                                            id="phone" placeholder="e.g. (123) 456-7890" type="tel" />
                                    </div>
                                    <div class="md:col-span-2">
                                        <label class="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                                            for="location">Location</label>
                                        <input
                                            class="form-input w-full rounded-md border-[var(--border-color)] focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition duration-200"
                                            id="location" placeholder="e.g. San Francisco, CA" type="text" />
                                    </div>
                                    <div class="md:col-span-2">
                                        <label class="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                                            for="summary">Professional Summary</label>
                                        <textarea
                                            class="form-textarea w-full rounded-md border-[var(--border-color)] focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition duration-200"
                                            id="summary"
                                            placeholder="Write a brief summary highlighting your skills and experience..."
                                            rows="5"></textarea>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="step3">
                            <div class="flex items-center gap-4 mb-6">
                                <div
                                    class="flex items-center justify-center h-12 w-12 rounded-full bg-[var(--primary-color)] text-white font-bold text-xl">
                                    3</div>
                                <h2 class="text-2xl font-bold text-[var(--text-primary)]">Preview and Download</h2>
                            </div>
                            <div
                                class="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-[var(--border-color)] flex flex-col md:flex-row items-center gap-6">
                                <div class="flex-grow">
                                    <h3 class="text-lg font-semibold text-[var(--text-primary)]">Your resume is ready!
                                    </h3>
                                    <p class="text-[var(--text-secondary)] mt-1">Download your resume and start applying
                                        for jobs.</p>
                                </div>
                                <button
                                    class="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[var(--primary-color)] text-white font-semibold rounded-lg shadow-md hover:bg-[var(--primary-hover)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-color)] transition duration-200">
                                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path clip-rule="evenodd"
                                            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                            fill-rule="evenodd"></path>
                                    </svg>
                                    Download Resume
                                </button>
                            </div>
                        </section>
                    </div>
                    <div class="lg:col-span-1">
                        <div class="sticky top-24">
                            <h3 class="text-lg font-semibold text-[var(--text-primary)] mb-4">Live Preview</h3>
                            <div
                                class="w-full bg-white rounded-lg shadow-lg border border-[var(--border-color)] overflow-hidden">
                                <div class="p-1 bg-gray-100 flex items-center gap-1.5">
                                    <div class="h-3 w-3 rounded-full bg-red-400"></div>
                                    <div class="h-3 w-3 rounded-full bg-yellow-400"></div>
                                    <div class="h-3 w-3 rounded-full bg-green-400"></div>
                                </div>
                                <div class="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover"
                                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAnQcpvCapoJ47dFmr1_QDK4ZMIKwZ_e19P5fN9dA1ixAOQlrknrrz2bKtvF_Ej_6t_sGYhmvzpsgOW_LR9H2V4BW7HXoDW-52_2kSSmxmSyZ8ANi0ZYx6cYxw8UZrKqeqEaRraQfJp8Sk3BkdP2t1WL6EINRh9pawPS7GIJr8NDTT6NRNkry5SuGBw-9qBaXM5t36NUTg7Jrosvd5b5bxTWmqLw7LugzH1faeIdLqImjlpx_bjDYOlaQ5vnBATimqu9PRK8MPEpGCh");'>
                                </div>
                            </div>
                            <p class="text-xs text-center text-[var(--text-light)] mt-4">This is a real-time preview of
                                your resume. Changes will appear here instantly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <footer class="bg-white border-t border-[var(--border-color)]">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-[var(--text-secondary)]">
                © 2024 JobPrep. All rights reserved.
            </div>
        </footer>
    </div>

</template>
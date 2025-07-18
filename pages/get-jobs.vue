<template class="bg-[var(--background-color)]">
    <div
        class="relative flex size-full min-h-screen flex-col text-[var(--text-primary-color)] group/design-root overflow-x-hidden">
        <main class="flex flex-1 gap-8 p-8">
            <aside class="w-80 flex-shrink-0">
                <div class="rounded-lg bg-[var(--white-color)] p-6 shadow-sm">
                    <h3 class="mb-6 text-lg font-bold">Filters</h3>
                    <div class="space-y-6">
                        <div>
                            <label class="mb-2 block text-sm font-medium text-[var(--text-primary-color)]"
                                for="industry">Industry</label>
                            <select
                                class="w-full rounded-lg border-[var(--border-color)] bg-[var(--white-color)] p-3 text-sm focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)]"
                                id="industry">
                                <option>All Industries</option>
                                <option>Technology</option>
                                <option>Finance</option>
                                <option>Healthcare</option>
                                <option>Marketing</option>
                            </select>
                        </div>
                        <div>
                            <label class="mb-2 block text-sm font-medium text-[var(--text-primary-color)]"
                                for="location">Location</label>
                            <select
                                class="w-full rounded-lg border-[var(--border-color)] bg-[var(--white-color)] p-3 text-sm focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)]"
                                id="location">
                                <option>All Locations</option>
                                <option>New York, NY</option>
                                <option>San Francisco, CA</option>
                                <option>Chicago, IL</option>
                                <option>Austin, TX</option>
                            </select>
                        </div>
                        <div>
                            <label class="mb-2 block text-sm font-medium text-[var(--text-primary-color)]">Job
                                Type</label>
                            <div class="space-y-2">
                                <div class="flex items-center">
                                    <input
                                        class="h-4 w-4 rounded border-gray-300 text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
                                        id="remote" type="checkbox" />
                                    <label class="ml-2 text-sm text-[var(--text-secondary-color)]"
                                        for="remote">Remote</label>
                                </div>
                                <div class="flex items-center">
                                    <input
                                        class="h-4 w-4 rounded border-gray-300 text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
                                        id="full-time" type="checkbox" />
                                    <label class="ml-2 text-sm text-[var(--text-secondary-color)]"
                                        for="full-time">Full-time</label>
                                </div>
                                <div class="flex items-center">
                                    <input
                                        class="h-4 w-4 rounded border-gray-300 text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
                                        id="part-time" type="checkbox" />
                                    <label class="ml-2 text-sm text-[var(--text-secondary-color)]"
                                        for="part-time">Part-time</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
            <div class="flex-1">
                <h1 class="mb-6 text-3xl font-bold">Job Board</h1>
                <div class="grid grid-cols-1 gap-6 @container lg:grid-cols-2 xl:grid-cols-3">
                    <div
                        class="group flex transform flex-col justify-between rounded-lg bg-[var(--white-color)] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <div>
                            <div class="mb-4 flex items-start justify-between">
                                <img alt="Company Logo" class="h-12 w-12 rounded-lg object-contain"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKmBcz3_4Nd-7OHzWS0bme1h_f2FBwbVhqBHD5UkRg0_uSRXoZlSI2V6MFx5VVqX3z_kQUc4Mdjj-a-iEfhXYy7DeGDVn6tgxr-HbnWFMaRwm3AKLGiLzAGHdh9_ze7k9-_kfBhOE0cH5TMX9bkMxLvfKw7XULOQbFyutzPuLEls5_dpuHFrNfdxmDX18TrsVlgzHBmetby0GXfRgzvVGeWus3nLTk9tZuGT2MIGoO1bTN7A4IHF0FPwzSnF0AAa6kXl4XkV8HraY" />
                                <div class="flex items-center gap-2">
                                    <button
                                        class="text-[var(--text-secondary-color)] hover:text-[var(--primary-color)]">
                                        <span class="material-symbols-outlined text-xl">visibility</span>
                                    </button>
                                    <button class="text-[var(--text-secondary-color)] hover:text-red-500">
                                        <span class="material-symbols-outlined text-xl">bookmark_border</span>
                                    </button>
                                </div>
                            </div>
                            <h3 class="mb-1 text-lg font-bold">Software Engineer</h3>
                            <p class="mb-3 text-sm text-[var(--text-secondary-color)]">
                                Tech Solutions Inc.
                                <span class="mx-1">•</span> Remote
                            </p>
                        </div>
                        <button
                            class="w-full rounded-lg bg-[var(--primary-color)] py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[var(--primary-hover-color)]">
                            Lamar Sekarang
                        </button>
                    </div>
                    <div
                        class="group flex transform flex-col justify-between rounded-lg bg-[var(--white-color)] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <div>
                            <div class="mb-4 flex items-start justify-between">
                                <img alt="Company Logo" class="h-12 w-12 rounded-lg object-contain"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFJTm-_P5C3gtnlyidO1rrhXQe4-VqJa4mvT3v0cBiaVxRXiy9xkns6D3wsK7zbt_nvenyDZrjJBNXnvQbLUezTeto6YJpRaA3_-6ve0LoImMAKpVI0IGh8exC_OZjeb0R56iRtxevBwFIQLhMTM0XQVDKL4oNZMsjfD359Nvf9dpcHQrehTMf_lQeBcV1ChskWeyK19aSH5DMO0DbwMrqK64t2SZJcRfhKLcdwCqCpV8DN0nRNbB_ErJn7K-5VYQMXrvo03QCsT8" />
                                <div class="flex items-center gap-2">
                                    <button
                                        class="text-[var(--text-secondary-color)] hover:text-[var(--primary-color)]">
                                        <span class="material-symbols-outlined text-xl">visibility</span>
                                    </button>
                                    <button class="text-[var(--text-secondary-color)] hover:text-red-500">
                                        <span class="material-symbols-outlined text-xl">bookmark_border</span>
                                    </button>
                                </div>
                            </div>
                            <h3 class="mb-1 text-lg font-bold">Data Analyst</h3>
                            <p class="mb-3 text-sm text-[var(--text-secondary-color)]">
                                Data Insights Co.
                                <span class="mx-1">•</span> New York, NY
                            </p>
                        </div>
                        <button
                            class="w-full rounded-lg bg-[var(--primary-color)] py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[var(--primary-hover-color)]">
                            Lamar Sekarang
                        </button>
                    </div>
                    <div
                        class="group flex transform flex-col justify-between rounded-lg bg-[var(--white-color)] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <div>
                            <div class="mb-4 flex items-start justify-between">
                                <img alt="Company Logo" class="h-12 w-12 rounded-lg object-contain"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWEt0aiQjWUVXGPatCF-S-mL5QdN4nBUb0YIhFfdT-fXIYzfoJyIgCqeVYXAjRoNyL6CVHxdAMaW7_6TxhOmbWgVKoz4Lg66xSQjpnP090cSGUZaGd3JkAANJnHhWaukGETvN0BWufz-RgdbqzPkLkPCtwIQPhX8T6gwDWo4Gp1Jt00Go5JJf9vFBFL1AAHk9Y4xgswc3m_uZ8ZVQfYMRFhY-MARJRqGY5YbijxBZ9tyoHfzBkEVaxSH1H_YlL8xh2AZ2u_pvFVwM" />
                                <div class="flex items-center gap-2">
                                    <button
                                        class="text-[var(--text-secondary-color)] hover:text-[var(--primary-color)]">
                                        <span class="material-symbols-outlined text-xl">visibility</span>
                                    </button>
                                    <button class="text-[var(--text-secondary-color)] hover:text-red-500">
                                        <span class="material-symbols-outlined text-xl">bookmark_border</span>
                                    </button>
                                </div>
                            </div>
                            <h3 class="mb-1 text-lg font-bold">Product Manager</h3>
                            <p class="mb-3 text-sm text-[var(--text-secondary-color)]">
                                Product Innovators Ltd.
                                <span class="mx-1">•</span> San Francisco, CA
                            </p>
                        </div>
                        <button
                            class="w-full rounded-lg bg-[var(--primary-color)] py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[var(--primary-hover-color)]">
                            Lamar Sekarang
                        </button>
                    </div>
                    <div
                        class="group flex transform flex-col justify-between rounded-lg bg-[var(--white-color)] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <div>
                            <div class="mb-4 flex items-start justify-between">
                                <img alt="Company Logo" class="h-12 w-12 rounded-lg object-contain"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR5xqRaCIClWWAhHzAqhbdRWUN1wyWUIZIsba8sIBuK0LRDOFM3Grl7T-3vrNlpsyrnCp1EKfuUQ5PfaNcN0C86-GgTVqBjQxPWvoyywRLO0z7blKCzMDuSl99lYZypZDaRFRDrC-I5M70YrokcmlM7QW0Ek0pMDGdE0bNtCuRJL2Z9bdGYXIw08Xl4Y5RGSMsXw85BTHTZp2KXnfHt6BBv8EgevGjiwNyfHdEKEVdEPEmrhI2N7pUi8u6f9cUMFiSD628v7P9Ryw" />
                                <div class="flex items-center gap-2">
                                    <button
                                        class="text-[var(--text-secondary-color)] hover:text-[var(--primary-color)]">
                                        <span class="material-symbols-outlined text-xl">visibility</span>
                                    </button>
                                    <button class="text-[var(--text-secondary-color)] hover:text-red-500">
                                        <span class="material-symbols-outlined text-xl">bookmark_border</span>
                                    </button>
                                </div>
                            </div>
                            <h3 class="mb-1 text-lg font-bold">UX/UI Designer</h3>
                            <p class="mb-3 text-sm text-[var(--text-secondary-color)]">
                                Design Dynamics LLC
                                <span class="mx-1">•</span> Remote
                            </p>
                        </div>
                        <button
                            class="w-full rounded-lg bg-[var(--primary-color)] py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[var(--primary-hover-color)]">
                            Lamar Sekarang
                        </button>
                    </div>
                    <div
                        class="group flex transform flex-col justify-between rounded-lg bg-[var(--white-color)] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <div>
                            <div class="mb-4 flex items-start justify-between">
                                <img alt="Company Logo" class="h-12 w-12 rounded-lg object-contain"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOmFH-Y-MybdFiXTcd5YzzZdHCpB0i7osLoJH7D4UZE32mOrHtUy2aNj_b4h2XHWSnjxJqP4UABf78c0HP1LgGYK3KIs9q6CrlSn7c8otx6QJz9iXiqdXxFYZIYs-MIwQqdyUyolASTyb_tbhfCIYX8j7KLvwr6PHGSJ5VT1iO4e5ezsQpmr9DLsh6f5yq-QhDVHk3kBJ32ps4OO3z-cGcReO9jScBLJqvlIKAYLL_aftmi5S4J3LH3nUcaGHBkssmN5sffKaHyLg" />
                                <div class="flex items-center gap-2">
                                    <button
                                        class="text-[var(--text-secondary-color)] hover:text-[var(--primary-color)]">
                                        <span class="material-symbols-outlined text-xl">visibility</span>
                                    </button>
                                    <button class="text-[var(--text-secondary-color)] hover:text-red-500">
                                        <span class="material-symbols-outlined text-xl">bookmark_border</span>
                                    </button>
                                </div>
                            </div>
                            <h3 class="mb-1 text-lg font-bold">Marketing Specialist</h3>
                            <p class="mb-3 text-sm text-[var(--text-secondary-color)]">
                                Global Marketing Group
                                <span class="mx-1">•</span> Chicago, IL
                            </p>
                        </div>
                        <button
                            class="w-full rounded-lg bg-[var(--primary-color)] py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[var(--primary-hover-color)]">
                            Lamar Sekarang
                        </button>
                    </div>
                    <div
                        class="group flex transform flex-col justify-between rounded-lg bg-[var(--white-color)] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <div>
                            <div class="mb-4 flex items-start justify-between">
                                <img alt="Company Logo" class="h-12 w-12 rounded-lg object-contain"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdulKNYhwmQh3mbncjIXYes-9knybNyJfD_NgwTiQqDYVcXhf7uOo3MLqRHJ1x2DGvUy2ASsPifSNt8HS3FFXdhU6tjAFCPfqkEgzGambRM2ZrKbb2OcasTJTu0B13edE3tMVlhmv1PkBOvno5nkrLIKYLDIYoDFOjGiz1t0ygxbZUPFQ1wOBiqz5z1jVppm-3xXIZDJHILZZ7RZym5fv0gLKcrL2xmMw_CDGL8HT8zeBq3owT5NqMSJeik5ZxyPZ0ujcU_LbqsJ0" />
                                <div class="flex items-center gap-2">
                                    <button
                                        class="text-[var(--text-secondary-color)] hover:text-[var(--primary-color)]">
                                        <span class="material-symbols-outlined text-xl">visibility</span>
                                    </button>
                                    <button class="text-[var(--text-secondary-color)] hover:text-red-500">
                                        <span class="material-symbols-outlined text-xl">bookmark_border</span>
                                    </button>
                                </div>
                            </div>
                            <h3 class="mb-1 text-lg font-bold">Financial Analyst</h3>
                            <p class="mb-3 text-sm text-[var(--text-secondary-color)]">
                                Finance First Corp.
                                <span class="mx-1">•</span> Remote
                            </p>
                        </div>
                        <button
                            class="w-full rounded-lg bg-[var(--primary-color)] py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[var(--primary-hover-color)]">
                            Lamar Sekarang
                        </button>
                    </div>
                </div>
            </div>
        </main>
    </div>

</template>

<style type="text/tailwindcss">
:root {
    --primary-color: #19b2e5;
    --primary-hover-color: #148cb4;
    --secondary-color: #f0f3f4;
    --text-primary-color: #111618;
    --text-secondary-color: #637f88;
    --white-color: #ffffff;
    --border-color: #dce3e5;
    --background-color: #f9fafb;
}

template {
    font-family: "Work Sans", sans-serif;
}

.active-nav {
    color: var(--primary-color) !important;
    font-weight: 700 !important;
    position: relative;
}

.active-nav::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--primary-color);
}
</style>
<template class="bg-[var(--background-color)]">
    <div class="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
        <div class="layout-container flex h-full grow flex-col">
            <header
                class="flex items-center justify-between whitespace-nowrap border-b border-solid border-[var(--border-color)] bg-[var(--surface-color)] px-10 py-3 shadow-sm sticky top-0 z-10">
                <div class="flex items-center gap-4 text-[var(--text-primary)]">
                    <div class="size-6 text-[var(--primary-color)]">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                                fill="currentColor" fill-rule="evenodd"></path>
                        </svg>
                    </div>
                    <h2 class="text-xl font-bold leading-tight tracking-[-0.015em]">JobPrep</h2>
                </div>
                <div class="flex flex-1 justify-end gap-6">
                    <nav class="flex items-center gap-8">
                        <a class="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors"
                            href="#">Home</a>
                        <a class="text-sm font-bold text-[var(--primary-color)]" href="#">Practice</a>
                        <a class="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors"
                            href="#">Resources</a>
                        <a class="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors"
                            href="#">Community</a>
                    </nav>
                    <div class="flex items-center gap-4">
                        <button
                            class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-[var(--text-secondary)] hover:bg-gray-200 transition-colors">
                            <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z">
                                </path>
                            </svg>
                        </button>
                        <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-offset-2 ring-[var(--primary-color)]"
                            style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDocOSKTbnH-_TfZc8fm8HdXbqJMJr8eFM7rslzQztO5yrFIWfCHzEoLss0goF2REK8ZPOKCNWlNtSph62r4NEGcnQow7odYA5s22hosqoc4jA_tujYTLeDCBYgw6OlShvdASIPjk-RFVhCSGS6XCCgrnqsTZzwAGlbpzdnjHiph4u_iB0sBUfUoIEz_behUauzjoNlSXOZzJ0o5lp1FePW-4URebmvNCfLLP9JDdyFlPIGGAC4LzMepOv4SovWQYkSXsS6b9-5qhhz");'>
                        </div>
                    </div>
                </div>
            </header>
            <main class="flex flex-1 justify-center py-10 px-4 sm:px-6 lg:px-8">
                <div class="layout-content-container flex w-full max-w-3xl flex-col gap-6">
                    <div class="rounded-xl border border-[var(--border-color)] bg-[var(--surface-color)] p-6 shadow-sm">
                        <div class="flex items-center justify-between mb-2">
                            <p class="text-sm font-medium text-[var(--text-primary)]">Interview Progress</p>
                            <p class="text-sm font-medium text-[var(--text-secondary)]">Question <span
                                    class="text-[var(--text-primary)] font-bold">2</span>/10</p>
                        </div>
                        <div class="progress-bar h-2 w-full overflow-hidden">
                            <div class="progress-bar-fill" style="width: 20%;"></div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-8">
                        <div class="flex items-start gap-4 chat-bubble">
                            <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-12 h-12 shrink-0 border-2 border-white shadow-md"
                                style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBu1YfjwMt5ixUitg2f1qe16Jbvy9WLg5zlJZExXSkpfToraYANCo6ic-NX9U6l71hi_1votC39DOxIRkZytLNFP1_5hMAX3yayQtwMKL6dOzVl906nwSxC_uN7TXtVGzQSVMWjbXk8-yIavXUcf9JZXTrlSYnMjzxOpoKWFmn6UMFOPraH4PDYOqb9xWaEnne7GKpKL5_01sBdnq2s9APEMWRvQvFMrX9LJ4lwsrCqWhBXXqqfmyRI24XEvbQ9UzmdYbHoW99fJFtZ");'>
                            </div>
                            <div class="flex flex-1 flex-col gap-2 items-start">
                                <p class="text-sm font-bold text-[var(--text-primary)]">AI Interviewer</p>
                                <div
                                    class="relative rounded-xl rounded-tl-none bg-[var(--surface-color)] px-5 py-3 text-[var(--text-primary)] shadow-md">
                                    <p class="text-base font-normal leading-relaxed">Welcome to your interview practice!
                                        I'm here to help you prepare. Let's start with a common question: <strong
                                            class="font-semibold">Tell me about yourself.</strong></p>
                                    <div class="absolute left-[-10px] top-0 h-4 w-4">
                                        <div
                                            class="h-full w-full bg-[var(--surface-color)] [clip-path:polygon(100%_0,0_100%,100%_100%)]">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-start gap-4">
                            <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-12 h-12 shrink-0 border-2 border-white shadow-md"
                                style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDocOSKTbnH-_TfZc8fm8HdXbqJMJr8eFM7rslzQztO5yrFIWfCHzEoLss0goF2REK8ZPOKCNWlNtSph62r4NEGcnQow7odYA5s22hosqoc4jA_tujYTLeDCBYgw6OlShvdASIPjk-RFVhCSGS6XCCgrnqsTZzwAGlbpzdnjHiph4u_iB0sBUfUoIEz_behUauzjoNlSXOZzJ0o5lp1FePW-4URebmvNCfLLP9JDdyFlPIGGAC4LzMepOv4SovWQYkSXsS6b9-5qhhz");'>
                            </div>
                            <div class="flex w-full flex-col gap-4">
                                <div
                                    class="relative rounded-xl rounded-tr-none bg-[var(--primary-color)] px-5 py-3 text-white shadow-md self-end max-w-md">
                                    <p class="text-base font-normal leading-relaxed">I'm a passionate frontend developer
                                        with 5 years of experience...</p>
                                    <div class="absolute right-[-10px] top-0 h-4 w-4">
                                        <div
                                            class="h-full w-full bg-[var(--primary-color)] [clip-path:polygon(0_0,0%_100%,100%_100%)]">
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="rounded-xl border border-green-200 bg-green-50 p-4 text-green-800 flex items-start gap-3 chat-bubble">
                                    <svg class="h-6 w-6 text-green-500 shrink-0" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="2"></path>
                                    </svg>
                                    <div>
                                        <p class="font-bold text-sm">Great start!</p>
                                        <p class="text-sm">This is a solid introduction. You clearly state your role and
                                            experience. To make it even better, you could add a specific achievement
                                            that showcases your skills.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-start gap-4 chat-bubble">
                            <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-12 h-12 shrink-0 border-2 border-white shadow-md"
                                style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBu1YfjwMt5ixUitg2f1qe16Jbvy9WLg5zlJZExXSkpfToraYANCo6ic-NX9U6l71hi_1votC39DOxIRkZytLNFP1_5hMAX3yayQtwMKL6dOzVl906nwSxC_uN7TXtVGzQSVMWjbXk8-yIavXUcf9JZXTrlSYnMjzxOpoKWFmn6UMFOPraH4PDYOqb9xWaEnne7GKpKL5_01sBdnq2s9APEMWRvQvFMrX9LJ4lwsrCqWhBXXqqfmyRI24XEvbQ9UzmdYbHoW99fJFtZ");'>
                            </div>
                            <div class="flex flex-1 flex-col gap-2 items-start">
                                <p class="text-sm font-bold text-[var(--text-primary)]">AI Interviewer</p>
                                <div
                                    class="relative rounded-xl rounded-tl-none bg-[var(--surface-color)] px-5 py-3 text-[var(--text-primary)] shadow-md">
                                    <div class="flex items-center gap-2 typing-indicator">
                                        <span class="animate-bounce"></span>
                                        <span class="animate-bounce [animation-delay:-0.15s]"></span>
                                        <span class="animate-bounce [animation-delay:-0.3s]"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 sticky bottom-0 bg-[var(--background-color)] py-4">
                        <div
                            class="flex items-end gap-4 rounded-xl border border-[var(--border-color)] bg-[var(--surface-color)] p-4 shadow-lg">
                            <textarea
                                class="form-input flex w-full flex-1 resize-none overflow-hidden rounded-lg border-gray-300 bg-gray-50 focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] p-3 text-base font-normal leading-normal transition-all"
                                oninput="this.style.height = 'auto'; this.style.height = (this.scrollHeight) + 'px';"
                                placeholder="Type your answer here..." rows="1"></textarea>
                            <button
                                class="flex h-12 w-12 min-w-[48px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[var(--primary-color)] text-white shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2 transition-all disabled:opacity-50">
                                <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L204.69,128,138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66ZM45.66,133.66,21.66,109.66a8,8,0,0,1,0-11.32L93.66,26.34a8,8,0,0,1,11.32,11.32L44.69,98l60.29,60.29a8,8,0,1,1-11.32,11.32Z"
                                        transform="rotate(90 128 128)"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>

</template>

<style type="text/tailwindcss">
:root {
    --primary-color: #0c7ff2;
    --background-color: #f8f9fa;
    --text-primary: #111418;
    --text-secondary: #60758a;
    --surface-color: #ffffff;
    --border-color: #e5e7eb;
    --success-color: #28a745;
}

body {
    font-family: 'Inter', sans-serif;
}

.progress-bar {
    background-color: var(--border-color);
    border-radius: 9999px;
}

.progress-bar-fill {
    background-color: var(--primary-color);
    height: 100%;
    border-radius: 9999px;
    transition: width 0.5s ease-in-out;
}

.chat-bubble {
    animation: pop-in 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@keyframes pop-in {
    0% {
        transform: scale(0.9);
        opacity: 0;
    }

    100% {
        transform: scale(1);
        opacity: 1;
    }
}

.typing-indicator span {
    height: 8px;
    width: 8px;
    background-color: var(--text-secondary);
    border-radius: 50%;
    display: inline-block;
    animation: bounce 1.3s infinite ease-in-out;
}

.typing-indicator span:nth-of-type(2) {
    animation-delay: -1.1s;
}

.typing-indicator span:nth-of-type(3) {
    animation-delay: -0.9s;
}

@keyframes bounce {

    0%,
    60%,
    100% {
        transform: translateY(0);
    }

    30% {
        transform: translateY(-4px);
    }
}
</style>
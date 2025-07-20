<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { ResumeApi } from '~/composables/consume-api'
import { useToast } from '#imports'
import type { CreateResumeRequest } from '~/types'

// Page metadata
useHead({
    title: 'Generate CV - Create Your Professional Resume',
    meta: [
        {
            name: 'description',
            content: 'Create a professional CV/Resume with our easy-to-use generator. Fill in your details and get a downloadable PDF resume instantly.'
        }
    ]
})

// STEP STATE
const step = ref(1)
const loading = ref(false)
const toast = useToast()

// --- RESUME FORM DATA ---
const form = reactive<CreateResumeRequest>({
    // Step 1 - Basic Information
    name: '',
    title: '',
    location: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    summary: '',

    // Step 2 - Experience, Education, Skills
    experiences: [
        {
            title: '',
            company: '',
            location: '',
            dates: '',
            description_points: [''],
        }
    ],
    education: [
        {
            degree: '',
            university: '',
            location: '',
            dates: '',
            gpa: '',
        }
    ],
    skills: {
        general: [''],
    },
})

// Templates for adding new items
const experienceTemplate = {
    title: '',
    company: '',
    location: '',
    dates: '',
    description_points: [''],
}

const educationTemplate = {
    degree: '',
    university: '',
    location: '',
    dates: '',
    gpa: '',
}

const skillCategories = ref(['general'])

// --- FORM MANAGEMENT FUNCTIONS ---
function addExperience() {
    form.experiences.push({ ...experienceTemplate })
}

function removeExperience(idx: number) {
    if (form.experiences.length > 1) {
        form.experiences.splice(idx, 1)
    }
}

function addDescriptionPoint(expIdx: number) {
    form.experiences[expIdx].description_points.push('')
}

function removeDescriptionPoint(expIdx: number, pointIdx: number) {
    if (form.experiences[expIdx].description_points.length > 1) {
        form.experiences[expIdx].description_points.splice(pointIdx, 1)
    }
}

function addEducation() {
    form.education.push({ ...educationTemplate })
}

function removeEducation(idx: number) {
    if (form.education.length > 1) {
        form.education.splice(idx, 1)
    }
}

function addSkillCategory() {
    const newKey = `category_${Date.now()}`
    skillCategories.value.push(newKey)
    form.skills[newKey] = ['']
}

function removeSkillCategory(key: string) {
    if (Object.keys(form.skills).length > 1) {
        delete form.skills[key]
        skillCategories.value = skillCategories.value.filter(k => k !== key)
    }
}

function addSkill(key: string) {
    form.skills[key].push('')
}

function removeSkill(key: string, idx: number) {
    if (form.skills[key].length > 1) {
        form.skills[key].splice(idx, 1)
    }
}

// --- VALIDATION ---
const canGoNext1 = computed(() => {
    return !!(form.name && form.title && form.email && form.phone && form.location)
})

const canGoNext2 = computed(() => {
    const hasValidExperience = form.experiences.every(exp =>
        exp.title && exp.company && exp.location && exp.dates
    )
    const hasValidEducation = form.education.every(edu =>
        edu.degree && edu.university && edu.location && edu.dates
    )
    return hasValidExperience && hasValidEducation
})

// --- RESULT STATE ---
const result = ref<{ Filename: string, PublicURL: string } | null>(null)

// --- SUBMIT HANDLER ---
async function handleSubmit() {
    loading.value = true
    try {
        // Clean up the data before submission
        const cleanSkills = Object.fromEntries(
            Object.entries(form.skills)
                .filter(([, skillArray]) => skillArray.some(skill => skill.trim() !== ''))
                .map(([category, skillArray]) => [
                    category,
                    skillArray.filter(skill => skill.trim() !== '')
                ])
        )

        const cleanedForm: CreateResumeRequest = {
            ...form,
            skills: cleanSkills,
            experiences: form.experiences.map(exp => ({
                ...exp,
                description_points: exp.description_points.filter(point => point.trim() !== '')
            })),
            education: form.education.filter(edu => edu.degree && edu.university)
        }

        // Call the API
        const response = await ResumeApi.createResume(cleanedForm)

        if (response.data) {
            result.value = response.data
            toast.add({
                title: 'Success!',
                description: 'Your resume has been generated successfully.',
                color: 'green'
            })
            step.value = 3
        } else {
            throw new Error('No data received from server')
        }
    } catch (error: any) {
        console.error('Resume creation error:', error)

        let errorMessage = 'Failed to generate resume. Please try again.'

        if (error.data?.detail) {
            if (Array.isArray(error.data.detail)) {
                errorMessage = error.data.detail.map((e: any) => e.msg || e).join(', ')
            } else {
                errorMessage = error.data.detail
            }
        } else if (error.message) {
            errorMessage = error.message
        }

        toast.add({
            title: 'Error',
            description: errorMessage,
            color: 'red'
        })
    } finally {
        loading.value = false
    }
}

// --- NAVIGATION ---
function goToStep(targetStep: number) {
    step.value = targetStep
}

function resetForm() {
    Object.assign(form, {
        name: '',
        title: '',
        location: '',
        phone: '',
        email: '',
        linkedin: '',
        github: '',
        summary: '',
        experiences: [{ ...experienceTemplate }],
        education: [{ ...educationTemplate }],
        skills: { general: [''] },
    })
    skillCategories.value = ['general']
    result.value = null
    step.value = 1
}
</script>

<template>
    <div class="min-h-screen bg-gray-50">
        <!-- Header -->
        <div class="bg-white border-b">
            <div class="container mx-auto px-4 py-6">
                <div class="flex items-center justify-between">
                    <h1 class="text-3xl font-bold text-gray-900">Generate Your CV</h1>
                    <div class="flex items-center space-x-4">
                        <div class="flex items-center space-x-2">
                            <div v-for="i in 3" :key="i" class="h-2 w-8 rounded-full transition-colors duration-200"
                                :class="step >= i ? 'bg-blue-600' : 'bg-gray-200'" />
                        </div>
                        <span class="text-sm text-gray-600">Step {{ step }} of 3</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mx-auto px-4 py-8">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Form Section -->
                <div class="lg:col-span-2">
                    <!-- Step 1: Basic Information -->
                    <div v-show="step === 1" class="bg-white rounded-lg shadow-sm border">
                        <div class="p-6 border-b">
                            <div class="flex items-center space-x-3">
                                <div
                                    class="h-10 w-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                                    1
                                </div>
                                <h2 class="text-xl font-semibold text-gray-900">Basic Information</h2>
                            </div>
                        </div>

                        <div class="p-6 space-y-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input id="name" v-model="form.name" type="text" placeholder="e.g. John Doe"
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required />
                                </div>

                                <div>
                                    <label for="title" class="block text-sm font-medium text-gray-700 mb-2">
                                        Job Title *
                                    </label>
                                    <input id="title" v-model="form.title" type="text"
                                        placeholder="e.g. Software Engineer"
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required />
                                </div>

                                <div>
                                    <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                                        Email *
                                    </label>
                                    <input id="email" v-model="form.email" type="email"
                                        placeholder="john.doe@example.com"
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required />
                                </div>

                                <div>
                                    <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number *
                                    </label>
                                    <input id="phone" v-model="form.phone" type="tel" placeholder="+62 812 3456 7890"
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required />
                                </div>

                                <div class="md:col-span-2">
                                    <label for="location" class="block text-sm font-medium text-gray-700 mb-2">
                                        Location *
                                    </label>
                                    <input id="location" v-model="form.location" type="text"
                                        placeholder="Jakarta, Indonesia"
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required />
                                </div>

                                <div>
                                    <label for="linkedin" class="block text-sm font-medium text-gray-700 mb-2">
                                        LinkedIn Profile
                                    </label>
                                    <input id="linkedin" v-model="form.linkedin" type="url"
                                        placeholder="https://linkedin.com/in/johndoe"
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                </div>

                                <div>
                                    <label for="github" class="block text-sm font-medium text-gray-700 mb-2">
                                        GitHub Profile
                                    </label>
                                    <input id="github" v-model="form.github" type="url"
                                        placeholder="https://github.com/johndoe"
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                </div>

                                <div class="md:col-span-2">
                                    <label for="summary" class="block text-sm font-medium text-gray-700 mb-2">
                                        Professional Summary
                                    </label>
                                    <textarea id="summary" v-model="form.summary" rows="4"
                                        placeholder="Write a brief summary of your professional background and key achievements..."
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                </div>
                            </div>

                            <div class="flex justify-end">
                                <button :disabled="!canGoNext1" @click="goToStep(2)"
                                    class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                                    Next Step
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Step 2: Experience, Education, Skills -->
                    <div v-show="step === 2" class="bg-white rounded-lg shadow-sm border">
                        <div class="p-6 border-b">
                            <div class="flex items-center space-x-3">
                                <div
                                    class="h-10 w-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                                    2
                                </div>
                                <h2 class="text-xl font-semibold text-gray-900">Experience, Education & Skills</h2>
                            </div>
                        </div>

                        <div class="p-6 space-y-8">
                            <!-- Work Experience -->
                            <div>
                                <div class="flex items-center justify-between mb-4">
                                    <h3 class="text-lg font-medium text-gray-900">Work Experience</h3>
                                    <button @click="addExperience"
                                        class="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors">
                                        + Add Experience
                                    </button>
                                </div>

                                <div class="space-y-4">
                                    <div v-for="(exp, idx) in form.experiences" :key="idx"
                                        class="p-4 border border-gray-200 rounded-lg relative">
                                        <button v-if="form.experiences.length > 1" @click="removeExperience(idx)"
                                            class="absolute top-2 right-2 p-1 text-red-600 hover:bg-red-50 rounded">
                                            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>

                                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                            <input v-model="exp.title" placeholder="Job Title *"
                                                class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                required />
                                            <input v-model="exp.company" placeholder="Company Name *"
                                                class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                required />
                                            <input v-model="exp.location" placeholder="Location *"
                                                class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                required />
                                            <input v-model="exp.dates" placeholder="Employment Period *"
                                                class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                required />
                                        </div>

                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                                Job Description & Achievements
                                            </label>
                                            <div class="space-y-2">
                                                <div v-for="(point, pointIdx) in exp.description_points" :key="pointIdx"
                                                    class="flex space-x-2">
                                                    <input v-model="exp.description_points[pointIdx]"
                                                        placeholder="Describe your responsibility or achievement..."
                                                        class="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                                    <button v-if="exp.description_points.length > 1"
                                                        @click="removeDescriptionPoint(idx, pointIdx)"
                                                        class="p-2 text-red-600 hover:bg-red-50 rounded">
                                                        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                                            stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <button @click="addDescriptionPoint(idx)"
                                                    class="text-sm text-blue-600 hover:text-blue-700">
                                                    + Add another point
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Education -->
                            <div>
                                <div class="flex items-center justify-between mb-4">
                                    <h3 class="text-lg font-medium text-gray-900">Education</h3>
                                    <button @click="addEducation"
                                        class="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors">
                                        + Add Education
                                    </button>
                                </div>

                                <div class="space-y-4">
                                    <div v-for="(edu, idx) in form.education" :key="idx"
                                        class="p-4 border border-gray-200 rounded-lg relative">
                                        <button v-if="form.education.length > 1" @click="removeEducation(idx)"
                                            class="absolute top-2 right-2 p-1 text-red-600 hover:bg-red-50 rounded">
                                            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>

                                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <input v-model="edu.degree" placeholder="Degree *"
                                                class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                required />
                                            <input v-model="edu.university" placeholder="University/Institution *"
                                                class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                required />
                                            <input v-model="edu.location" placeholder="Location *"
                                                class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                required />
                                            <input v-model="edu.dates" placeholder="Study Period *"
                                                class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                required />
                                            <input v-model="edu.gpa" placeholder="GPA (optional)"
                                                class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Skills -->
                            <div>
                                <div class="flex items-center justify-between mb-4">
                                    <h3 class="text-lg font-medium text-gray-900">Skills</h3>
                                    <button @click="addSkillCategory"
                                        class="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors">
                                        + Add Category
                                    </button>
                                </div>

                                <div class="space-y-4">
                                    <div v-for="category in skillCategories" :key="category"
                                        class="p-4 border border-gray-200 rounded-lg">
                                        <div class="flex items-center justify-between mb-3">
                                            <input :value="category"
                                                :placeholder="`Category name (e.g., ${category === 'general' ? 'Technical Skills' : 'Programming Languages'})`"
                                                class="font-medium text-gray-900 bg-transparent border-none p-0 focus:outline-none capitalize"
                                                readonly />
                                            <button v-if="skillCategories.length > 1"
                                                @click="removeSkillCategory(category)"
                                                class="p-1 text-red-600 hover:bg-red-50 rounded">
                                                <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>

                                        <div class="space-y-2">
                                            <div v-for="(skill, skillIdx) in form.skills[category]" :key="skillIdx"
                                                class="flex space-x-2">
                                                <input v-model="form.skills[category][skillIdx]"
                                                    placeholder="Enter a skill..."
                                                    class="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                                <button v-if="form.skills[category].length > 1"
                                                    @click="removeSkill(category, skillIdx)"
                                                    class="p-2 text-red-600 hover:bg-red-50 rounded">
                                                    <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <button @click="addSkill(category)"
                                                class="text-sm text-blue-600 hover:text-blue-700">
                                                + Add skill
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex justify-between pt-6">
                                <button @click="goToStep(1)"
                                    class="px-6 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
                                    Previous Step
                                </button>
                                <button :disabled="loading || !canGoNext2" @click="handleSubmit"
                                    class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2">
                                    <svg v-if="loading" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none"
                                        viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                            stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                        </path>
                                    </svg>
                                    <span>{{ loading ? 'Generating...' : 'Generate Resume' }}</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Step 3: Success -->
                    <div v-show="step === 3" class="bg-white rounded-lg shadow-sm border">
                        <div class="p-6 border-b">
                            <div class="flex items-center space-x-3">
                                <div
                                    class="h-10 w-10 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                                    ✓
                                </div>
                                <h2 class="text-xl font-semibold text-gray-900">Resume Generated Successfully!</h2>
                            </div>
                        </div>

                        <div class="p-6 text-center space-y-6">
                            <div class="text-6xl">🎉</div>
                            <div>
                                <h3 class="text-lg font-medium text-gray-900 mb-2">Your professional resume is ready!
                                </h3>
                                <p class="text-gray-600">Download your resume and start applying for your dream job.</p>
                            </div>

                            <div class="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                                <a v-if="result?.PublicURL" :href="result.PublicURL" target="_blank"
                                    class="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-flex items-center justify-center space-x-2">
                                    <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <span>Download Resume</span>
                                </a>

                                <button @click="resetForm"
                                    class="px-8 py-3 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
                                    Create Another Resume
                                </button>
                            </div>

                            <div v-if="result?.Filename" class="text-sm text-gray-500">
                                Filename: {{ result.Filename }}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Live Preview Section -->
                <div class="lg:col-span-1">
                    <div class="sticky top-8">
                        <h3 class="text-lg font-semibold text-gray-900 mb-4">Live Preview</h3>
                        <div class="bg-white rounded-lg shadow-lg border overflow-hidden">
                            <!-- Browser mockup header -->
                            <div class="bg-gray-100 px-4 py-3 flex items-center space-x-2">
                                <div class="h-3 w-3 bg-red-400 rounded-full"></div>
                                <div class="h-3 w-3 bg-yellow-400 rounded-full"></div>
                                <div class="h-3 w-3 bg-green-400 rounded-full"></div>
                            </div>

                            <!-- Resume preview content -->
                            <div class="p-6 text-sm">
                                <!-- Header -->
                                <div class="text-center mb-6">
                                    <h2 class="text-xl font-bold text-gray-900 mb-1">
                                        {{ form.name || 'Your Name' }}
                                    </h2>
                                    <p class="text-gray-600 mb-2">
                                        {{ form.title || 'Job Title' }}{{ form.location ? ` | ${form.location}` : '' }}
                                    </p>
                                    <div class="text-xs text-gray-500 space-y-1">
                                        <div v-if="form.email || form.phone" class="flex justify-center space-x-4">
                                            <span v-if="form.email">{{ form.email }}</span>
                                            <span v-if="form.phone">{{ form.phone }}</span>
                                        </div>
                                        <div v-if="form.linkedin || form.github" class="flex justify-center space-x-4">
                                            <span v-if="form.linkedin">LinkedIn</span>
                                            <span v-if="form.github">GitHub</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Summary -->
                                <div v-if="form.summary" class="mb-6">
                                    <h3 class="font-semibold text-gray-900 mb-2 text-sm border-b border-gray-300 pb-1">
                                        PROFESSIONAL SUMMARY
                                    </h3>
                                    <p class="text-xs text-gray-700 leading-relaxed">
                                        {{ form.summary }}
                                    </p>
                                </div>

                                <!-- Experience -->
                                <div v-if="form.experiences.some(exp => exp.title && exp.company)" class="mb-6">
                                    <h3 class="font-semibold text-gray-900 mb-3 text-sm border-b border-gray-300 pb-1">
                                        WORK EXPERIENCE
                                    </h3>
                                    <div class="space-y-4">
                                        <div v-for="(exp, idx) in form.experiences.filter(e => e.title && e.company)"
                                            :key="idx" class="text-xs">
                                            <div class="flex justify-between items-start mb-1">
                                                <div>
                                                    <h4 class="font-semibold text-gray-900">{{ exp.title }}</h4>
                                                    <p class="text-gray-700">{{ exp.company }}{{ exp.location ? `,
                                                        ${exp.location}` : '' }}</p>
                                                </div>
                                                <span v-if="exp.dates" class="text-gray-500 text-right">{{ exp.dates
                                                    }}</span>
                                            </div>
                                            <ul v-if="exp.description_points.some(p => p.trim())"
                                                class="mt-2 space-y-1">
                                                <li v-for="(point, pointIdx) in exp.description_points.filter(p => p.trim())"
                                                    :key="pointIdx" class="flex items-start space-x-2">
                                                    <span class="text-gray-400 mt-1">•</span>
                                                    <span class="text-gray-700 leading-relaxed">{{ point }}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <!-- Education -->
                                <div v-if="form.education.some(edu => edu.degree && edu.university)" class="mb-6">
                                    <h3 class="font-semibold text-gray-900 mb-3 text-sm border-b border-gray-300 pb-1">
                                        EDUCATION
                                    </h3>
                                    <div class="space-y-3">
                                        <div v-for="(edu, idx) in form.education.filter(e => e.degree && e.university)"
                                            :key="idx" class="text-xs">
                                            <div class="flex justify-between items-start">
                                                <div>
                                                    <h4 class="font-semibold text-gray-900">{{ edu.degree }}</h4>
                                                    <p class="text-gray-700">{{ edu.university }}{{ edu.location ? `,
                                                        ${edu.location}` : '' }}</p>
                                                    <p v-if="edu.gpa" class="text-gray-600">GPA: {{ edu.gpa }}</p>
                                                </div>
                                                <span v-if="edu.dates" class="text-gray-500">{{ edu.dates }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Skills -->
                                <div v-if="Object.values(form.skills).some(skillArray => skillArray.some(skill => skill.trim()))"
                                    class="mb-6">
                                    <h3 class="font-semibold text-gray-900 mb-3 text-sm border-b border-gray-300 pb-1">
                                        SKILLS
                                    </h3>
                                    <div class="space-y-2">
                                        <div v-for="(skillArray, category) in form.skills" :key="category"
                                            class="text-xs">
                                            <div v-if="skillArray.some(skill => skill.trim())" class="flex">
                                                <span class="font-semibold text-gray-900 capitalize min-w-[80px]">{{
                                                    category }}:</span>
                                                <span class="text-gray-700 ml-2">
                                                    {{skillArray.filter(skill => skill.trim()).join(', ')}}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Empty state -->
                                <div v-if="!form.name && !form.title && !form.summary" class="text-center py-12">
                                    <svg class="h-12 w-12 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <p class="text-gray-500 text-sm">Start filling out the form to see your resume
                                        preview</p>
                                </div>
                            </div>
                        </div>

                        <p class="text-xs text-gray-500 text-center mt-3">
                            This is a live preview. Your actual PDF resume may have different formatting.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Additional custom styles if needed */
.form-input:focus,
.form-textarea:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

@media (max-width: 768px) {
    .sticky {
        position: relative !important;
        top: 0 !important;
    }
}

/* Print styles for better PDF generation */
@media print {
    .no-print {
        display: none !important;
    }
}
</style>
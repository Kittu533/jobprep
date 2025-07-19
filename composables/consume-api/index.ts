import { ArticleApi } from './article.api'
import { AuthApi } from './auth.api'
import { InterviewApi } from './interview.api'
import { JobApi } from './job.api'
import { ResumeApi } from './resume.api'
import { UserApi } from './user.api'

// Export all API classes for easy import
export { AuthApi } from './auth.api'
export { UserApi } from './user.api'
export { ResumeApi } from './resume.api'
export { InterviewApi } from './interview.api'
export { JobApi } from './job.api'
export { ArticleApi } from './article.api'

// Re-export for convenient access
export const api = {
    auth: AuthApi,
    user: UserApi,
    resume: ResumeApi,
    interview: InterviewApi,
    job: JobApi,
    article: ArticleApi
}
import { interviewStatus } from 'const';
import { QuestionData } from 'types/QuestionData';

export interface InterviewData {
    status: keyof typeof interviewStatus,
    questions: QuestionData[]
}

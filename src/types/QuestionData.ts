export interface QuestionData {
    type: 'SINGLE_CHOICE' | 'TEXT',
    id: string,
    text: string,
    options: { label: string, value: string }[],
}

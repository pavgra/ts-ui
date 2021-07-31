const apiPaths = {
    interview: (id: string) => `/api/v1/interviews/${id}`,
    submissions: () => `/api/v1/submissions`,
};

const interviewStatus = {
    ACTIVE: 'ACTIVE',
    FINISHED: 'FINISHED',
};

export {
    apiPaths,
    interviewStatus
}
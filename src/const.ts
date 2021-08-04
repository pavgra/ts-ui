const paths = {
    interviewPreview: (id: string) => `/interviews/${id}/preview`
}

const apiPaths = {
    interview: (id?: string) => '/api/v1/interviews' + (id ? `/${id}` : ''),
    submissions: () => `/api/v1/submissions`,
};

const interviewStatus = {
    ACTIVE: 'ACTIVE',
    FINISHED: 'FINISHED',
};

export {
    apiPaths,
    interviewStatus,
    paths,
}
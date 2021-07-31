import { ComponentType } from 'react';

import InterviewNew from 'pages/InterviewNew';
import InterviewList from 'pages/InterviewList';
import InterviewPreview from 'pages/InterviewPreview';
import Interview from 'pages/Interview';
import InterviewFinished from 'pages/InterviewFinished';

interface RouteDefinition {
    path: string,
    label: string,
    component: ComponentType,
    showDrawer?: boolean,
    showInMenu?: boolean
}

const routes: RouteDefinition[] = [
    {
        path: '/interviews/new',
        label: 'Create interview link',
        component: InterviewNew,
    },
    {
        path: '/interviews/finished',
        label: '',
        component: InterviewFinished,
        showDrawer: false,
        showInMenu: false,
    },
    {
        path: '/interviews',
        label: 'View interviews',
        component: InterviewList,
    },
    {
        path: '/interviews/:id/preview',
        label: '',
        component: InterviewPreview,
        showDrawer: false,
        showInMenu: false,
    },
    {
        path: '/interviews/:id',
        label: '',
        component: Interview,
        showDrawer: false,
        showInMenu: false,
    }
];

export default routes;
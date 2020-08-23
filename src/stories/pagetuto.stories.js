import React from 'react';

import { Pagetuto } from './pagetuto';

export default {
    title: 'tutorial div',
    component: Pagetuto,
    argTypes: {
        backgroundColor: { control: 'color' },
        borderColor: { control: 'color' },
    },
};

const Tamplate = (args) => <Pagetuto {...args} />;

export const Thick = Tamplate.bind({});
Thick.args = {
    borderWidth: 'thick',
    label: 'tutorial div'
};

export const Medium = Tamplate.bind({});
Medium.args = {
    label: 'tutorial div'
};

export const Thin = Tamplate.bind({});
Thin.args = {
    borderWidth: 'thin',
    label: 'tutorial div'
};
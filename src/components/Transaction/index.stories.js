import React from 'react';

import Transaction from '.';

export default {
    title: 'Example/Transaction',
    component: Transaction,
};

const Template = (args) => <Transaction {...args} />;

export const Income = Template.bind({});
Income.args = {
    transaction: {
        label: 'some aafa',
        value: 23
    },
};

// import '@/css/tailwind.css';
import Button from '@/components/Button.vue';

export default {
    title: 'Button',
    component: Button,
};

export const Primary = args => ({
    components: { Button },
    // setup() {
    //     return { args, ...actionsData };
    // },
    template: `
        <button class="flex items-center justify-center bg-green-3 w-16 h-8 text-sm border-solid rounded mx-2">
            範例文字
        </button>`,
});

// export const Primary = () => <button>123</button>;
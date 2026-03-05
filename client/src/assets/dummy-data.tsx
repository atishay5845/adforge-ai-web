import { UploadIcon, VideoIcon, ZapIcon } from 'lucide-react';

export const featuresData = [
    {
        icon: <UploadIcon className="w-6 h-6"/>,
        title: 'Smart Upload',
        desc: 'Drag and drop your assests. We auto-optimize formats and sizes.'
    },
    {
        icon: <ZapIcon className="w-6 h-6" />,
        title: 'Instant Generation',
        desc: 'Optimized models deliver output in seconds with great fidelity.'
    },
    {
        icon: <VideoIcon className="w-6 h-6" />,
        title: 'Video Synthesis',
        desc: 'Bring product shots to life with short-form, social-ready videos.'
    }
];

export const plansData = [
    {
        id: 'starter',
        name: 'Starter',
        price: '$10',
        desc: 'Try the platform at no cost.',
        credits: 25,
        features: [
            '25 Credits',
            'Standard Quality',
            'No Watermark',
            'Slower Generation Speed',
            'Email support'
        ]
    },
    {
        id: 'pro',
        name: 'Pro',
        price: '$29',
        desc: 'Creators and small teams.',
        credits: 80,
        features: [
            '80 Credits',
            'HD Quality',
            'No Watermark',
            'Faster Generation Speed',
            'Priority support'
        ],
        popular: true
    },
    {
        id: 'ultra',
        name: 'Ultra',
        price: '$99',
        desc: 'Scale across teams and agencies.',
        credits: 300,
        features: [
            '300 Credits',
            'FHD Quality',
            'No Watermark',
            'Fastest Generation Speed',
            'Chat + Email support'
        ]
    }
];

export const faqData = [
    {
        question: 'What services does your platform provide?',
        answer: 'We leverage state of the art diffusion models trained on millions of product images to blend your product into realistic scenes while preserving details, lighting and reflections.'
    },
    {
        question: 'Do I own the generated images?',
        answer: 'Yes, you receive full commercial rights to any images and videos generated on the platform. Use them for ads, ecommerce, social media and more without restrictions.'
    },
    {
        question: 'Can I cancel any time?',
        answer: 'Yes - you can cancel from your dashboard. You will retain access through the end of your billing period.'
    },
    {
        question: 'What input formats do you support?',
        answer: 'We support PNG, JPG and WEBP image formats. For videos, we support MP4 and MOV formats. Maximum file size is 50MB.'
    }
];

export const footerLinks = [
    {
        title: "Company",
        links: [
            { name: "Home", url: "#" },
            { name: "Services", url: "#" },
            { name: "Work", url: "#" },
            { name: "Contact", url: "#" }
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", url: "#" },
            { name: "Terms of Service", url: "#" }
        ]
    },
    {
        title: "Connect",
        links: [
            { name: "Twitter", url: "#" },
            { name: "LinkedIn", url: "#" },
            { name: "GitHub", url: "#" }
        ]
    }
];
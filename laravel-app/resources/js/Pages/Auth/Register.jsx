import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import backgroundImage from '/public/thrift.png';
import Logo from '/public/sunshine.v2.png'; 

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="LeSunshine - Register" />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})`, filter: 'blur(8px)' }}></div>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-screen">
                    <div className="bg-white rounded-lg shadow-lg p-8 w-96 max-w-full flex flex-col items-center relative">
                        <Link href={route('welcome')} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </Link>
                        <img src={Logo} alt="LeSunshine Logo" className="h-24 w-auto mb-8" />
                        <h2 className="text-3xl font-bold mb-6 text-center">Create Your Account</h2>
                        <form onSubmit={submit} className="w-full">
                            <div className="mb-6">
                                <InputLabel htmlFor="name" value="Name" />
                                <TextInput
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    className="mt-2 block w-full p-3 border border-gray-300 rounded-lg"
                                    autoComplete="name"
                                    isFocused={true}
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                />
                                <InputError message={errors.name} className="mt-2" />
                            </div>
                            <div className="mb-6">
                                <InputLabel htmlFor="email" value="Email" />
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-2 block w-full p-3 border border-gray-300 rounded-lg"
                                    autoComplete="username"
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>
                            <div className="mb-6">
                                <InputLabel htmlFor="password" value="Password" />
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-2 block w-full p-3 border border-gray-300 rounded-lg"
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    required
                                />
                                <InputError message={errors.password} className="mt-2" />
                            </div>
                            <div className="mb-6">
                                <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                                <TextInput
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="mt-2 block w-full p-3 border border-gray-300 rounded-lg"
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    required
                                />
                                <InputError message={errors.password_confirmation} className="mt-2" />
                            </div>
                            <div className="flex justify-between items-center mb-6">
                                <Link href={route('login')} className="text-sm text-gray-600 hover:text-gray-900">
                                    Already registered? Login here
                                </Link>
                            </div>
                            <PrimaryButton className="w-full py-3 rounded-full text-center flex items-center justify-center bg-red-600 hover:bg-red-700 text-white" disabled={processing}>
                                {processing ? 'Processing...' : 'Register'}
                            </PrimaryButton>
                        </form>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}

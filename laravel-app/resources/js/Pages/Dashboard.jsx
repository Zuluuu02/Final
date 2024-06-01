import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    // Sample posts data
    const posts = [
        {
            id: 1,
            user: {
                name: "TOMBO MADRIDA",
                username: "Itsurtombs_madrida",
                avatar: "rodel.jpg",
            },
            content: "Just posted my latest adventure! Check it out!",
            image: "madrid.jpg",
            likes: 20,
            comments: 5,
        },
        {
            id: 2,
            user: {
                name: "Andre Jimmers",
                username: "andre_camps",
                avatar: "jimm.jpg",
            },
            content: "Feeling grateful for the beautiful sunset today. 🌅",
            image: "andre.jpg",
            likes: 35,
            comments: 8,
        },
        // Add more sample posts here...
    ];

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {/* Render posts */}
                        {posts.map((post) => (
                            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                                {/* Post image */}
                                <img src={post.image} alt="Post" className="w-full h-48 object-cover object-center" />

                                {/* Post content */}
                                <div className="p-4">
                                    {/* User info */}
                                    <div className="flex items-center mb-2">
                                        <img src={post.user.avatar} alt="User Avatar" className="w-8 h-8 rounded-full" />
                                        <div className="ml-2">
                                            <h3 className="text-sm font-semibold">{post.user.name}</h3>
                                            <p className="text-xs text-gray-500">@{post.user.username}</p>
                                        </div>
                                    </div>

                                    {/* Post content */}
                                    <p className="text-sm mb-4">{post.content}</p>

                                    {/* Post interactions */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M3.75 4.5a2.75 2.75 0 015.5 0v8.564a5.78 5.78 0 01-.772 2.802 1.9 1.9 0 01-1.59.834l-2.057.12a.25.25 0 01-.243-.315l.745-2.726a1.075 1.075 0 00-.19-.986L4.15 10H3.75A2.75 2.75 0 013.75 4.5zm2.75 1.75a1 1 0 00-1 1v7.793c0 .137.01.273.03.407.02.14.053.279.098.414l.747-2.726c.09-.328.403-.553.75-.553h2.387c.286 0 .537-.154.676-.394a1.26 1.26 0 01.172-.257L13.5 8.25V6.25a1 1 0 00-1-1h-5.5z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-xs text-gray-500">{post.likes} Likes</span>
                                        </div>
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M9.527 3.624A2 2 0 0111.765 3h4.485a2 2 0 011.772 2.828l-1.758 5.274a1 1 0 00-.028.224l-.773 2.832a1 1 0 01-.926.706H6.88a1 1 0 01-.926-.706l-.773-2.832a1 1 0 00-.028-.224l-1.758-5.274a2 2 0 011.772-2.828h4.485a1.999 1.999 0 011.428.596l.11.109a.5.5 0 00.708-.708l-.11-.11a1.999 1.999 0 00-1.428-.596h-4.485a.999.999 0 00-.893.557l-1.26 3.778a.999.999 0 01-.895.557l-.905.04a.999.999 0 01-.894-.557l-1.26-3.778a.999.999 0 00-.893-.557H3.716a1.999 1.999 0 00-1.497 3.343l.773 2.832a3 3 0 002.794 2.09h8.891a3 3 0 002.794-2.09l.773-2.832A1.999 1.999 0 0016.284 5H8.857a.5.5 0 00-.47.324l-.78 2.343a.999.999 0 01-.936.666l-.905-.04a.999.999 0 01-.895-.557l-1.26-3.778a.999.999 0 00-.893-.557H3.716A1.999 1.999 0 001.219 5h4.058a.5.5 0 00.468-.324l.243-.729A2 2 0 019.527 3.624z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-xs text-gray-500">{post.comments} Comments</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

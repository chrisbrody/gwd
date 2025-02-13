import React from 'react';
import './BlogPreviewSection.css';
import FadeInOnScroll from '../FadeInOnScroll';

function BlogPreviewSection() {
    const blogPosts = [
        {
            id: 1,
            title: 'The Future of Web Development: AI-Powered Design',
            excerpt:
                'Explore how artificial intelligence is revolutionizing web design, from automated layouts to personalized user experiences. Discover the tools and techniques shaping the future of web development.',
            imageUrl: 'https://placehold.co/600x400/3498db/ffffff?text=AI+Design', // Placeholder image URL
            link: '/articles/2025/february/',
        },
        {
            id: 2,
            title: '5 Ways AI Can Improve Your Customer Service',
            excerpt:
                'Learn how to leverage AI to enhance your customer service, from AI-powered chatbots to personalized support experiences. Boost customer satisfaction and streamline your support operations.',
            imageUrl: 'https://placehold.co/600x400/2ecc71/ffffff?text=AI+Customer+Service', // Placeholder image URL
            link: '/blog/ai-customer-service', // Replace with the actual link to your blog post
        },
    ];

    return (
        <div className="blog-preview-section">
            <FadeInOnScroll>
                <h2>Latest from Our Blog</h2>
                <div className="blog-posts-container">
                    {blogPosts.map((post) => (
                        <div className="blog-post" key={post.id}>
                            <a href={post.link} className="blog-post-link">
                                <img src={post.imageUrl} alt={post.title} className="blog-post-image" />
                                <div className="blog-post-content">
                                    <h3>{post.title}</h3>
                                    <p>{post.excerpt}</p>
                                    <span className="read-more">Read More →</span>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </FadeInOnScroll>
        </div>
    );
}

export default BlogPreviewSection;
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Skills from '../components/Skills';
import Header from '../components/Header';
import RichTextRenderer from '../components/RichTextRenderer';
import Footer from '../components/Footer';
import GitGraph from '../components/Gitgraph';

export default function Blogs() {
  const { documentId } = useParams();
  const [blog, setProject] = useState(null);

    useEffect(() => {
         const baseUrl = import.meta.env.VITE_API_URL;

        if (!documentId) {
            console.warn('documentId is undefined — fetch aborted');
            console.log("💡 documentId from useParams:", documentId);
            return;
        }
        fetch(`${baseUrl}/blogs?filters[documentId][$eq]=${documentId}&populate=*`)
        .then(res => res.json())
        .then(data => {
            console.log("📦 Full fetch response:", data);
            if (Array.isArray(data.data) && data.data.length > 0) {
            setProject(data.data[0]);
            } else {
            console.warn('No blog found with documentId:', documentId);
            }
        })
    }, [documentId]);

  if (!blog) return <p>Loading blog...</p>;

    return (
        <div className="relative flex min-h-screen flex-col bg-[#111a22] dark group/design-root _overflow-x-hidden font-['Space Grotesk','Noto Sans',sans-serif']">
            <Header />
            <div className="layout-container flex h-full grow flex-col overflow-x-hidden">
                <div className="px-4 sm:px-8 md:px-16 lg:px-40 xl:px-40 2xl:px-80 flex flex-1 justify-center pt-8 pb-5">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        
                        <div id="top" className="@container">
                            <div className="@[480px]:p-8">
                                {blog?.Image?.url ? (
                                    <div
                                        className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded items-start justify-end px-8 pb-10 @[480px]:px-8"
                                        style={{
                                            backgroundImage:
                                                `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(/cms/${blog.Image.url})`,
                                        }}
                                    >
                                        <div className="flex flex-col gap-2 text-left">
                                            <h1 className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">{blog?.Title}</h1>
                                            <h2 className="text-white text-m font-regular leading-normal @[480px]:text-base mt-2">{blog.Intro}</h2>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex min-h-[150px] flex-col gap-6 items-start justify-end px-4 pb-10">
                                        <div className="flex flex-col gap-2 text-left">
                                            <h1 className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">{blog?.Title}</h1>
                                            <h2 className="text-white text-m font-regular leading-normal @[480px]:text-base mt-2">{blog.Intro}</h2>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div
                            className="flex flex-col sm:flex-col gap-0 px-8 pt-4 pb-8 justify-between mt-4 sm:mt-0 sm:gap-4"
                        >
                            <div className="flex flex-1 flex-col justify-center">
                                <RichTextRenderer content={blog.Content} />

                                 <p className="text-[#93adc8] text-sm font-bold leading-normal py-2">
                                {blog.Date
                                    ? new Date(blog.Date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                                    : ''}
                                </p>
                            </div>
                        </div>

                        <hr className="mt-8 mb-14 border-t border-gray-700" />
                        <GitGraph />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

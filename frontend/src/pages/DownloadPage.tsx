// src/pages/DownloadPage.tsx
import React from 'react';
import { useState } from 'react';
import Navbar from '../components/navigation/Navbar';

interface DownloadResponse {
 url: string;
}

interface DownloadPageProps {
 setPressKitOpen: (isOpen: boolean) => void;
}

const DownloadPage: React.FC<DownloadPageProps> = ({ setPressKitOpen }) => {
 const [downloadStarted, setDownloadStarted] = useState(false);
//  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
 const [error, setError] = useState<string | null>(null);

 const handleDownload = async () => {
   try {
     const response = await fetch('/api/download-link', {
       method: 'GET',
     });

     if (!response.ok) throw new Error('다운로드 링크를 가져오는 데 실패했습니다.');

     const data: DownloadResponse = await response.json();
    //  setDownloadUrl(data.url);
     setDownloadStarted(true);
     window.location.href = data.url;
   } catch (err) {
     setError((err as Error).message);
     setDownloadStarted(false);
   }
 };

 return (
   <div className="relative w-full min-h-screen bg-zinc-900 text-gray-200">
     {/* Background effects */}
     <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
                   from-blue-500/5 via-zinc-900 to-zinc-900 pointer-events-none" />
     <div className="fixed inset-0 bg-[url('/assets/noise.png')] opacity-[0.015] 
                   pointer-events-none" />

     <div id="nav-trigger" className="h-0"></div>
     <Navbar setPressKitOpen={setPressKitOpen} />

     <main className="relative z-10">
       <div className="container mx-auto px-[20%] py-20">
         <div className="max-w-3xl mx-auto">
           {/* Title Section */}
           <div className="relative mb-16">
             <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 
                          border-blue-500/30" />
             <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 
                          border-blue-500/30" />
             <h1 className="text-5xl font-pixel text-center
                         text-transparent bg-clip-text 
                         bg-gradient-to-r from-blue-400 to-teal-400">
               아르카나 다운로드
             </h1>
           </div>

           {/* System Requirements Section */}
           <div className="relative p-8 mb-12 bg-zinc-800/50 rounded-xl
                       border border-zinc-700/50 group">
             <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                         bg-gradient-to-r from-blue-500/5 to-teal-500/5
                         transition-opacity duration-300 rounded-xl" />
             
             <h2 className="text-2xl font-pixel text-center mb-8
                         text-transparent bg-clip-text 
                         bg-gradient-to-r from-blue-400 to-teal-400">
               시스템 요구사항
             </h2>
             
             <div className="grid grid-cols-2 gap-8 text-left">
               {/* Minimum Specs */}
               <div className="space-y-4">
                 <h3 className="font-pixel text-lg text-transparent bg-clip-text 
                            bg-gradient-to-r from-blue-400 to-teal-400">
                   최소 사양
                 </h3>
                 <ul className="space-y-2 text-gray-300">
                   <li className="flex items-center gap-2">
                     <div className="w-2 h-2 bg-blue-500/50 rounded-full" />
                     OS: Windows 10 64-bit
                   </li>
                   <li className="flex items-center gap-2">
                     <div className="w-2 h-2 bg-blue-500/50 rounded-full" />
                     프로세서: Intel Core i5-4460
                   </li>
                   <li className="flex items-center gap-2">
                     <div className="w-2 h-2 bg-blue-500/50 rounded-full" />
                     메모리: 8GB RAM
                   </li>
                   <li className="flex items-center gap-2">
                     <div className="w-2 h-2 bg-blue-500/50 rounded-full" />
                     그래픽: NVIDIA GTX 960
                   </li>
                   <li className="flex items-center gap-2">
                     <div className="w-2 h-2 bg-blue-500/50 rounded-full" />
                     저장공간: 10GB
                   </li>
                 </ul>
               </div>

               {/* Recommended Specs */}
               <div className="space-y-4">
                 <h3 className="font-pixel text-lg text-transparent bg-clip-text 
                            bg-gradient-to-r from-blue-400 to-teal-400">
                   권장 사양
                 </h3>
                 <ul className="space-y-2 text-gray-300">
                   <li className="flex items-center gap-2">
                     <div className="w-2 h-2 bg-teal-500/50 rounded-full" />
                     OS: Windows 10 64-bit
                   </li>
                   <li className="flex items-center gap-2">
                     <div className="w-2 h-2 bg-teal-500/50 rounded-full" />
                     프로세서: Intel Core i7-8700
                   </li>
                   <li className="flex items-center gap-2">
                     <div className="w-2 h-2 bg-teal-500/50 rounded-full" />
                     메모리: 16GB RAM
                   </li>
                   <li className="flex items-center gap-2">
                     <div className="w-2 h-2 bg-teal-500/50 rounded-full" />
                     그래픽: NVIDIA RTX 2060
                   </li>
                   <li className="flex items-center gap-2">
                     <div className="w-2 h-2 bg-teal-500/50 rounded-full" />
                     저장공간: 10GB
                   </li>
                 </ul>
               </div>
             </div>
           </div>

           {/* Download Button Section */}
           <div className="mb-12 text-center">
             <button
               onClick={handleDownload}
               className="relative group px-12 py-4 rounded-lg
                       bg-zinc-800/80 hover:bg-zinc-800
                       border border-zinc-700/50 hover:border-zinc-600
                       transition-all duration-300"
             >
               <span className="relative z-10 font-pixel text-xl
                             text-transparent bg-clip-text 
                             bg-gradient-to-r from-blue-400 to-teal-400">
                 게임 다운로드
               </span>
               <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                           bg-gradient-to-r from-blue-500/10 to-teal-500/10
                           rounded-lg blur-sm transition-opacity duration-300" />
             </button>
             
             {downloadStarted && (
               <p className="text-teal-400 mt-4 font-pixel">
                 다운로드가 시작되었습니다. 잠시만 기다려주세요...
               </p>
             )}
             {error && (
               <p className="text-red-400 mt-4 font-pixel">
                 오류가 발생했습니다: {error}
               </p>
             )}
           </div>

           {/* Version Info */}
           <div className="text-center space-y-2 text-gray-400 font-pixel">
             <p>버전: 1.0.0 | 파일 크기: 8.5GB</p>
             <p className="text-sm">* 다운로드 속도는 인터넷 연결 상태에 따라 다를 수 있습니다.</p>
           </div>
         </div>
       </div>
     </main>

     {/* Decorative corner elements */}
     <div className="fixed top-0 left-0 w-16 h-16 border-l-2 border-t-2 
                  border-blue-500/20 pointer-events-none" />
     <div className="fixed top-0 right-0 w-16 h-16 border-r-2 border-t-2 
                  border-blue-500/20 pointer-events-none" />
     <div className="fixed bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 
                  border-blue-500/20 pointer-events-none" />
     <div className="fixed bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 
                  border-blue-500/20 pointer-events-none" />
   </div>
 );
};

export default DownloadPage;
(() => {
  const CULTURE_VIDEOS = {
    tari: { title: 'Tari Gambyong', subtitle: 'Tarian tradisional Jawa khas Surakarta', file: 'video/tari-gambyong.mp4', icon: 'fa-masks-theater', accent: '#b91c1c' },
    raja: { title: 'Taman Nasional Bromo Tengger Semeru', subtitle: 'Keindahan alam Taman Nasional Bromo Tengger Semeru', file: 'video/taman-nasional-bromo.mp4', icon: 'fa-water', accent: '#0e7490' },
    anggrek: { title: 'Bunga Sedap Malam', subtitle: 'Puspa pesona Indonesia', file: 'video/bunga-sedap-malam.mp4', icon: 'fa-spa', accent: '#b45309' }
  };
  window.CulturalVideoModal = function({ type, onClose }) {
    const data = CULTURE_VIDEOS[type] || CULTURE_VIDEOS.tari;
    const ref = React.useRef(null);
    React.useEffect(() => {
      document.body.style.overflow = 'hidden';
      const key = e => { if (e.key === 'Escape') onClose(); };
      window.addEventListener('keydown', key);
      const t = setTimeout(() => ref.current?.play().catch(() => {}), 100);
      return () => { clearTimeout(t); window.removeEventListener('keydown', key); document.body.style.overflow = ''; };
    }, [onClose]);
    return React.createElement('div', { className:'fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6', style:{background:'rgba(3,8,18,.86)',backdropFilter:'blur(8px)'}, onMouseDown:e=>{if(e.target===e.currentTarget)onClose();}},
      React.createElement('div',{className:'w-full max-w-3xl overflow-hidden rounded-3xl border-2 border-[#d4af37] bg-[#071022] shadow-2xl',style:{animation:'fadeIn .25s cubic-bezier(.16,1,.3,1) forwards'}},
        React.createElement('div',{className:'flex items-center justify-between gap-3 px-4 py-3 sm:px-5'},
          React.createElement('div',{className:'min-w-0 flex items-center gap-3'},
            React.createElement('div',{className:'w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0',style:{background:data.accent}},React.createElement('i',{className:`fa-solid ${data.icon}`})),
            React.createElement('div',{className:'min-w-0'},React.createElement('div',{className:'font-black text-sm sm:text-base text-[#f3e5ab] truncate'},data.title),React.createElement('div',{className:'text-[10px] sm:text-xs text-slate-300'},data.subtitle))),
          React.createElement('button',{onClick:onClose,className:'w-10 h-10 rounded-full bg-white/10 text-white hover:bg-rose-500 transition-colors flex items-center justify-center shrink-0',title:'Tutup video'},React.createElement('i',{className:'fa-solid fa-xmark'}))),
        React.createElement('div',{className:'bg-black aspect-video w-full'},React.createElement('video',{ref,src:data.file,controls:true,playsInline:true,preload:'auto',className:'w-full h-full object-contain'})),
        React.createElement('div',{className:'flex items-center justify-between gap-3 px-4 py-3 text-[10px] sm:text-xs text-slate-300'},React.createElement('span',null,'▶ Video langsung di dalam Rupiah Explorer'),React.createElement('span',{className:'text-[#f3e5ab] font-bold'},'ESC untuk menutup'))
      )
    );
  };
})();

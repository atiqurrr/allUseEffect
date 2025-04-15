import React from "react";

const App = () => {
  return (
    // ১. ডেটা ফেচিং (Data Fetching)
    // API থেকে ডেটা লোড করা

    // jsx
    // Copy
    // useEffect(() => {
    //   fetch('https://api.example.com/data')
    //     .then(res => res.json())
    //     .then(data => setData(data));
    // }, []);

    // সার্চ কুয়েরি অনুযায়ী ডেটা ফেচ
    // useEffect(() => {
    //   fetch(`https://api.example.com/search?q=${query}`)
    //     .then(res => res.json())
    //     .then(results => setResults(results));
    // }, [query]); // query চেঞ্জ হলে আবার ফেচ করবে

    // অ্যাবর্ট কন্ট্রোলার দিয়ে ক্যানসেলযোগ্য রিকোয়েস্ট
    // useEffect(() => {
    //   const abortController = new AbortController();
    //   fetch(url, { signal: abortController.signal })
    //     .then(res => res.json());
    //   return () => abortController.abort(); // আনমাউন্টে রিকোয়েস্ট ক্যানসেল
    // }, []);

    // পেজিনেশন ইমপ্লিমেন্ট
    // useEffect(() => {
    //   fetch(`https://api.example.com/items?page=${page}`)
    //     .then(res => res.json())
    //     .then(data => setItems(data));
    // }, [page]); // পেজ চেঞ্জ হলে নতুন ডেটা

    // ডেটা রিফ্রেশ করার জন্য পোলিং
    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     fetchData().then(data => setData(data));
    //   }, 5000);
    //   return () => clearInterval(interval); // ক্লিনআপ
    // }, []);

    // ২. ইভেন্ট লিসেনার (Event Listeners)
    // উইন্ডো রিসাইজ ইভেন্ট হ্যান্ডলিং
    // useEffect(() => {
    //   const handleResize = () => setWidth(window.innerWidth);
    //   window.addEventListener('resize', handleResize);
    //   return () => window.removeEventListener('resize', handleResize);
    // }, []);

    // স্ক্রোল ইভেন্ট ট্র্যাক করা

    // useEffect(() => {
    //   const handleScroll = () => setScrollY(window.scrollY);
    //   window.addEventListener('scroll', handleScroll);
    //   return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    // কীবোর্ড শর্টকাট (যেমন Escape প্রেস)
    // useEffect(() => {
    //   const handleKeyPress = (e) => {
    //     if (e.key === 'Escape') closeModal();
    //   };
    //   window.addEventListener('keydown', handleKeyPress);
    //   return () => window.removeEventListener('keydown', handleKeyPress);
    // }, []);

    // মাউস মুভমেন্ট ট্র্যাক
    // useEffect(() => {
    //   const trackMouse = (e) => setPosition({ x: e.clientX, y: e.clientY });
    //   window.addEventListener('mousemove', trackMouse);
    //   return () => window.removeEventListener('mousemove', trackMouse);
    // }, []);

    // ব্রাউজার ট্যাব ক্লোজ হওয়ার আগে ওয়ার্নিং
    // useEffect(() => {
    //   const handleBeforeUnload = (e) => {
    //     e.preventDefault();
    //     e.returnValue = ''; // Chrome-এ কাজ করে
    //   };
    //   window.addEventListener('beforeunload', handleBeforeUnload);
    //   return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    // }, []);

    // ৩. টাইমার ও ইন্টারভাল (Timers)
    // সিম্পল টাইমার
    // useEffect(() => {
    //   const timer = setTimeout(() => {
    //     alert('5 সেকেন্ড পর শো করছে!');
    //   }, 5000);
    //   return () => clearTimeout(timer);
    // }, []);

    // কাউন্টার ইন্টারভাল
    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     setCount(prev => prev + 1);
    //   }, 1000);
    //   return () => clearInterval(interval);
    // }, []);

    // ডিবাউন্সড সার্চ ইনপু
    // useEffect(() => {
    //   const debounceTimer = setTimeout(() => {
    //     // API কল এখানে
    //   }, 300);
    //   return () => clearTimeout(debounceTimer);
    // }, [searchTerm]);

    // থ্রটলিং (যেমন স্ক্রোল ইভেন্ট)
    // useEffect(() => {
    //   let throttleTimer;
    //   const handleScroll = () => {
    //     if (!throttleTimer) {
    //       throttleTimer = setTimeout(() => {
    //         // কোড এখানে
    //         throttleTimer = null;
    //       }, 100);
    //     }
    //   };
    //   window.addEventListener('scroll', handleScroll);
    //   return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //     clearTimeout(throttleTimer);
    //   };
    // }, []);

    // অ্যানিমেশন ফ্রেম রিকোয়েস্ট
    // useEffect(() => {
    //   let animationId;
    //   const animate = () => {
    //     // অ্যানিমেশন লজিক
    //     animationId = requestAnimationFrame(animate);
    //   };
    //   animate();
    //   return () => cancelAnimationFrame(animationId);
    // }, []);

    // ৪. DOM ম্যানিপুলেশন (DOM Manipulation)
    // ইনপুট ফিল্ডে অটো ফোকাস
    // useEffect(() => {
    //   inputRef.current.focus();
    // }, []);

    // ডকুমেন্ট টাইটেল আপডেট
    // useEffect(() => {
    //   document.title = `You have ${messages.length} new messages`;
    // }, [messages.length])

    // ডায়নামিক স্টাইল অ্যাপ্লাই (যেমন স্ক্রোল লক)
    // useEffect(() => {
    //   document.body.style.overflow = 'hidden'; // মোডাল খোলা থাকলে
    //   return () => document.body.style.overflow = 'visible';
    // }, []);

    // এক্সটার্নাল লাইব্রেরি ইনিশিয়ালাইজ (যেমন টিনিমস)
    // useEffect(() => {
    //   const editor = new ThirdPartyEditor('#editor');
    //   return () => editor.destroy(); // ক্লিনআপ
    // }, []);

    // ভিডিও কন্ট্রোল (প্লে/পজ
    // useEffect(() => {
    //   if (isPlaying) {
    //     videoRef.current.play();
    //   } else {
    //     videoRef.current.pause();
    //   }
    // }, [isPlaying]);

    // ৫. সাবস্ক্রিপশন ম্যানেজমেন্ট (Subscriptions)
    // ওয়েব সকেট কানেকশন

    // useEffect(() => {
    //   const socket = new WebSocket('wss://api.example.com/ws');
    //   socket.onmessage = (event) => updateData(event.data);
    //   return () => socket.close();
    // }, []);

    // ফায়ারবেজ রিয়েলটাইম ডেটা
    // useEffect(() => {
    //   const unsubscribe = firestore.collection('posts').onSnapshot(snapshot => {
    //     // ডেটা আপডেট
    //   });
    //   return () => unsubscribe(); // আনসাবস্ক্রাইব
    // }, []);

    // রেডাক্স স্টোর সাবস্ক্রাইব
    // useEffect(() => {
    //   const unsubscribe = store.subscribe(() => {
    //     const state = store.getState();
    //     setData(state.data);
    //   });
    //   return () => unsubscribe();
    // }, []);

    // ইভেন্ট এমিটার লিসেন
    // useEffect(() => {
    //   const handler = (data) => console.log(data);
    //   eventEmitter.on('customEvent', handler);
    //   return () => eventEmitter.off('customEvent', handler);
    // }, []);

    // পুশ নোটিফিকেশন
    // useEffect(() => {
    //   const subscription = pushService.subscribe(user => {
    //     showNotification(user.message);
    //   });
    //   return () => subscription.unsubscribe();
    // }, []);

    // ৬. স্টেট পার্সিস্টেন্স (State Persistence)
    // লোকাল স্টোরেজে স্টেট সেভ
    // useEffect(() => {
    //   localStorage.setItem('userSettings', JSON.stringify(settings));
    // }, [settings]);

    // সেশনের জন্য স্টোরেজ সিঙ্ক
    // useEffect(() => {
    //   const savedData = sessionStorage.getItem('formData');
    //   if (savedData) setFormData(JSON.parse(savedData));
    // }, []);

    // মাল্টিপল ট্যাব সিঙ্ক
    // useEffect(() => {
    //   const handleStorage = (e) => {
    //     if (e.key === 'theme') setTheme(e.newValue);
    //   };
    //   window.addEventListener('storage', handleStorage);
    //   return () => window.removeEventListener('storage', handleStorage);
    // }, []);

    // ফর্ম অটোসেভ

    // useEffect(() => {
    //   const timer = setTimeout(() => {
    //     saveToBackend(formData);
    //   }, 2000);
    //   return () => clearTimeout(timer);
    // }, [formData]);

    // ব্রাউজার হিস্ট্রি ম্যানেজ
    // useEffect(() => {
    //   window.history.pushState({}, '', `?page=${page}`);
    // }, [page]);

    // ৭. লাইফসাইকেল ম্যানেজমেন্ট (Lifecycle)
    // কম্পোনেন্ট মাউন্ট হলে অ্যাকশন
    // useEffect(() => {
    //   console.log('Component mounted!');
    // }, []);

    // কম্পোনেন্ট আনমাউন্টে ক্লিনআপ
    // useEffect(() => {
    //   return () => console.log('Component unmounted!');
    // }, []);

    // প্রপস চেঞ্জ হলে আপডেট
    // useEffect(() => {
    //   fetchUserDetails(userId);
    // }, [userId]); // userId চেঞ্জ হলে

    // স্টেটের উপর নির্ভরশীল ইফেক্ট

    // useEffect(() => {
    //   if (isLoggedIn) fetchProfile();
    // }, [isLoggedIn]);

    // রেফ ব্যবহার করে প্রিভিয়াস ভ্যালু ট্র্যাক

    // const prevCountRef = useRef();
    // useEffect(() => {
    //   prevCountRef.current = count;
    // });

    // ৮. পারফরম্যান্স অপ্টিমাইজেশন
    // মেমোইজেশন (যেমন API ক্যাশিং)

    // useEffect(() => {
    //   if (!cache.current[query]) {
    //     fetchData().then(data => {
    //       cache.current[query] = data;
    //       setData(data);
    //     });
    //   } else {
    //     setData(cache.current[query]);
    //   }
    // }, [query]);

    // এক্সপেনসিভ ক্যালকুলেশন
    // useEffect(() => {
    //   const computedResult = heavyCalculation(data);
    //   setResult(computedResult);
    // }, [data]);

    // উইন্ডোড লিস্ট (ভার্চুয়ালাইজড স্ক্রোল)

    // useEffect(() => {
    //   const visibleItems = allItems.slice(scrollIndex, scrollIndex + 50);
    //   setVisible(visibleItems);
    // }, [scrollIndex, allItems]);

    // লেইজি লোডিং (ইমেজ বা কম্পোনেন্ট)

    // useEffect(() => {
    //   const observer = new IntersectionObserver((entries) => {
    //     if (entries[0].isIntersecting) loadMoreData();
    //   });
    //   observer.observe(loadMoreRef.current);
    //   return () => observer.disconnect();
    // }, []);

    // কোড স্প্লিটিং (ডায়নামিক ইম্পোর্ট)

    // useEffect(() => {
    //   import('heavy-library').then((lib) => {
    //     lib.initialize();
    //   });
    // }, []);

    // ৯. থার্ড-পার্টি ইন্টিগ্রেশন
    // Google ম্যাপস লোড

    // useEffect(() => {
    //   const script = document.createElement('script');
    //   script.src = `https://maps.googleapis.com/maps/api/js?key=API_KEY`;
    //   document.body.appendChild(script);
    //   return () => document.body.removeChild(script);
    // }, []);

    // D3.js গ্রাফ রেন্ডার
    // useEffect(() => {
    //   const svg = d3.select(ref.current);
    //   svg.selectAll('*').remove(); // পুরাতন ক্লিনআপ
    //   // নতুন গ্রাফ রেন্ডার
    // }, [data]);

    // jQuery প্লাগিন ইনিশিয়ালাইজ
    // useEffect(() => {
    //   $('#slider').slider({ value: initialValue });
    //   return () => $('#slider').slider('destroy');
    // }, []);

    // অ্যানালিটিক্স ট্র্যাকিং

    // useEffect(() => {
    //   analytics.track('page_view', { page: currentPage });
    // }, [currentPage]);

    // রিচ টেক্সট এডিটর (যেমন CKEditor)

    // useEffect(() => {
    //   ClassicEditor.create(ref.current)
    //     .then(editor => editorRef.current = editor)
    //     .catch(console.error);
    //   return () => {
    //     if (editorRef.current) editorRef.current.destroy();
    //   };
    // }, []);

    // ১০. মিসেলেনিয়াস (Miscellaneous)
    // অথেন্টিকেশন চেক

    // useEffect(() => {
    //   const checkAuth = async () => {
    //     const isAuthenticated = await verifyToken();
    //     if (!isAuthenticated) redirectToLogin();
    //   };
    //   checkAuth();
    // }, []);

    // জিওলোকেশন ট্র্যাক
    // useEffect(() => {
    //   navigator.geolocation.watchPosition(
    //     (position) => setLocation(position.coords),
    //     (error) => console.error(error)
    //   );
    // }, []);

    // ক্লিপবোর্ড কপি ফাংশন
    // useEffect(() => {
    //   if (isCopied) {
    //     navigator.clipboard.writeText(text);
    //     setTimeout(() => setIsCopied(false), 2000);
    //   }
    // }, [isCopied]);

    // থিম সুইচ (ডার্ক/লাইট মোড)
    // useEffect(() => {
    //   document.documentElement.setAttribute('data-theme', theme);
    // }, [theme]);

    // কম্পোনেন্টে ফোকাস ট্র্যাপ (যেমন মোডাল)
    // useEffect(() => {
    //   const focusable = modalRef.current.querySelector('button, [href], input');
    //   focusable.focus();
    // }, []);

    //     . ফর্ম হ্যান্ডলিং (Form Handling)
    //     ইনপুট ভ্যালিডেশন

    // useEffect(() => {
    //   if (password.length < 8) {
    //     setError("Password must be at least 8 characters");
    //   } else {
    //     setError("");
    //   }
    // }, [password]);

    // ফর্ম সাবমিটের পর রিসেট

    // jsx
    // Copy
    // useEffect(() => {
    //   if (isSubmitted) {
    //     setFormData(initialState);
    //     setIsSubmitted(false);
    //   }
    // }, [isSubmitted])

    // ডিনামিক ফিল্ড যোগ করা
    // useEffect(() => {
    //   if (addNewField) {
    //     setFields([...fields, { id: Date.now(), value: "" }]);
    //     setAddNewField(false);
    //   }
    // }, [addNewField]);

    // অটোকমপ্লিট সার্চ
    // useEffect(() => {
    //   if (searchQuery.trim()) {
    //     fetchSuggestions(searchQuery);
    //   }
    // }, [searchQuery]);

    // ফর্ম ডেটা ডিবাগিং
    // useEffect(() => {
    //   console.log("Current Form Data:", formData);
    // }, [formData]);

    // ১২. এনিমেশন ও ট্রানজিশন (Animation & Transitions)
    // CSS ট্রানজিশন ট্রিগার
    // useEffect(() => {
    //   if (isVisible) {
    //     elementRef.current.classList.add("fade-in");
    //   }
    // }, [isVisible]);

    // স্ক্রোল-বেজড এনিমেশন
    // useEffect(() => {
    //   const element = elementRef.current;
    //   const animateOnScroll = () => {
    //     if (element.getBoundingClientRect().top < window.innerHeight) {
    //       element.classList.add("animate");
    //     }
    //   };
    //   window.addEventListener("scroll", animateOnScroll);
    //   return () => window.removeEventListener("scroll", animateOnScroll);
    // }, []);

    // মাউস হোভার ইফেক্ট
    // useEffect(() => {
    //   const element = elementRef.current;
    //   const handleHover = () => element.style.transform = "scale(1.1)";
    //   const handleLeave = () => element.style.transform = "scale(1)";
    //   element.addEventListener("mouseenter", handleHover);
    //   element.addEventListener("mouseleave", handleLeave);
    //   return () => {
    //     element.removeEventListener("mouseenter", handleHover);
    //     element.removeEventListener("mouseleave", handleLeave);
    //   };
    // }, []);

    // লোডিং স্পিনার
    // useEffect(() => {
    //   let timeout;
    //   if (isLoading) {
    //     timeout = setTimeout(() => {
    //       setIsLoading(false);
    //     }, 3000);
    //   }
    //   return () => clearTimeout(timeout);
    // }, [isLoading]);

    // পেজ ট্রানজিশন
    // useEffect(() => {
    //   document.body.classList.add("page-transition");
    //   return () => document.body.classList.remove("page-transition");
    // }, []);

    // ১৩. নেটওয়ার্ক স্ট্যাটাস (Network Status)
    // অনলাইন/অফলাইন ডিটেক্ট
    // useEffect(() => {
    //   const handleOnline = () => setIsOnline(true);
    //   const handleOffline = () => setIsOnline(false);
    //   window.addEventListener("online", handleOnline);
    //   window.addEventListener("offline", handleOffline);
    //   return () => {
    //     window.removeEventListener("online", handleOnline);
    //     window.removeEventListener("offline", handleOffline);
    //   };
    // }, []);

    // নেটওয়ার্ক স্পিড চেক
    // useEffect(() => {
    //   navigator.connection.addEventListener("change", updateNetworkInfo);
    //   return () => navigator.connection.removeEventListener("change", updateNetworkInfo);
    // }, []);

    // স্লো নেটওয়ার্কে লো-রেস ইমেজ লোড
    // useEffect(() => {
    //   if (navigator.connection?.effectiveType === "slow-2g") {
    //     setImageQuality("low");
    //   }
    // }, []);

    // ১৪. এক্সটার্নাল স্টোরেজ (External Storage)
    // ইনডেক্সড ডিবি (IndexedDB) ব্যবহার
    // useEffect(() => {
    //   const openDB = async () => {
    //     const db = await idb.open('myDB', 1);
    //     setDatabase(db);
    //   };
    //   openDB();
    // }, []);

    // কুকিজ রিড/রাইট
    // useEffect(() => {
    //   document.cookie = `theme=${theme}; path=/`;
    // }, [theme]);

    // ফাইল সিস্টেম অ্যাক্সেস
    // useEffect(() => {
    //   if ('showOpenFilePicker' in window) {
    //     const handleFile = async () => {
    //       const [fileHandle] = await window.showOpenFilePicker();
    //       const file = await fileHandle.getFile();
    //       setSelectedFile(file);
    //     };
    //     handleFile();
    //   }
    // }, []);

    // ১৫. পারফরম্যান্স মনিটরিং (Performance Monitoring)
    // রেন্ডার টাইম মাপা

    // useEffect(() => {
    //   const start = performance.now();
    //   return () => {
    //     const end = performance.now();
    //     console.log(`Render time: ${end - start}ms`);
    //   };
    // }, [dependencies]);

    // মেমোরি ইউজেজ ট্র্যাক
    // useEffect(() => {
    //   const memory = window.performance.memory;
    //   console.log(`Used JS heap: ${memory.usedJSHeapSize}`);
    // }, []);

    // ১৬. সিকিউরিটি (Security)
    // XSS প্রোটেকশন
    // useEffect(() => {
    //   const sanitizeHTML = (html) => {
    //     const div = document.createElement("div");
    //     div.textContent = html;
    //     return div.innerHTML;
    //   };
    //   setSanitizedContent(sanitizeHTML(rawContent));
    // }, [rawContent]);

    // CSRF টোকেন সেট
    // useEffect(() => {
    //   fetch('/api/csrf-token')
    //     .then(res => res.json())
    //     .then(data => setCsrfToken(data.token));
    // }, []);

    // ১৭. মিডিয়া হ্যান্ডলিং (Media Handling)
    // অডিও প্লেব্যাক কন্ট্রোল
    // useEffect(() => {
    //   if (isPlaying) {
    //     audioRef.current.play();
    //   } else {
    //     audioRef.current.pause();
    //   }
    // }, [isPlaying]);

    // ভিডিও ভলিউম সিঙ্ক
    // useEffect(() => {
    //   videoRef.current.volume = volume;
    // }, [volume]);

    // ক্যামেরা অ্যাক্সেস

    // useEffect(() => {
    //   navigator.mediaDevices.getUserMedia({ video: true })
    //     .then(stream => videoRef.current.srcObject = stream);
    //   return () => videoRef.current.srcObject?.getTracks().forEach(track => track.stop());
    // }, []);

    // স্ক্রিন রেকর্ডিং
    // useEffect(() => {
    //   let mediaRecorder;
    //   if (isRecording) {
    //     navigator.mediaDevices.getDisplayMedia()
    //       .then(stream => {
    //         mediaRecorder = new MediaRecorder(stream);
    //         mediaRecorder.start();
    //       });
    //   }
    //   return () => mediaRecorder?.stop();
    // }, [isRecording]);

    // ১৮. থার্ড-পার্টি SDK (Third-Party SDKs)
    // ফেসবুক SDK লোড
    // useEffect(() => {
    //   window.fbAsyncInit = () => {
    //     FB.init({ appId: 'your-app-id', version: 'v12.0' });
    //   };
    //   const script = document.createElement('script');
    //   script.src = "https://connect.facebook.net/en_US/sdk.js";
    //   document.body.appendChild(script);
    //   return () => document.body.removeChild(script);
    // }, []);

    // টুইটার উইজেট
    // useEffect(() => {
    //   const script = document.createElement('script');
    //   script.src = "https://platform.twitter.com/widgets.js";
    //   document.body.appendChild(script);
    //   return () => document.body.removeChild(script);
    // }, []);

    // স্টাইপ পেমেন্ট ইন্টিগ্রেশন
    // useEffect(() => {
    //   const stripe = window.Stripe('pk_test_123');
    //   setStripe(stripe);
    // }, []);

    // রিচ টেক্সট এডিটর (Quill.js)

    // useEffect(() => {
    //   const editor = new Quill('#editor', { theme: 'snow' });
    //   return () => editor.destroy();
    // }, []);

    // ১৯. অ্যাক্সেসিবিলিটি (Accessibility)
    // ফোকাস ট্র্যাপ (মোডালের ভিতরে)
    // useEffect(() => {
    //   const focusableElements = modalRef.current.querySelectorAll('button, [href], input');
    //   const firstElement = focusableElements[0];
    //   const lastElement = focusableElements[focusableElements.length - 1];

    //   const handleTab = (e) => {
    //     if (e.key === 'Tab') {
    //       if (!e.shiftKey && document.activeElement === lastElement) {
    //         e.preventDefault();
    //         firstElement.focus();
    //       } else if (e.shiftKey && document.activeElement === firstElement) {
    //         e.preventDefault();
    //         lastElement.focus();
    //       }
    //     }
    //   };
    //   document.addEventListener('keydown', handleTab);
    //   return () => document.removeEventListener('keydown', handleTab);
    // }, []);

    // ARIA লাইভ রিজিয়ন আপডেট

    // useEffect(() => {
    //   const region = document.getElementById('live-region');
    //   region.textContent = notification;
    // }, [notification]);

    // ২০. এডভান্সড স্টেট ম্যানেজমেন্ট (Advanced State Management)
    // গ্লোবাল স্টেট সিঙ্ক (Context API)

    // useEffect(() => {
    //   const unsubscribe = store.subscribe(() => {
    //     const globalState = store.getState();
    //     setLocalState(globalState.data);
    //   });
    //   return () => unsubscribe();
    // }, []);

    // স্টেট ভ্যালিডেশন
    // useEffect(() => {
    //   if (count < 0 || count > 100) {
    //     setCount(0);
    //   }
    // }, [count]);

    // স্টেটের উপর কন্ডিশনাল ইফেক্ট
    // useEffect(() => {
    //   if (user.role === 'admin') {
    //     fetchAdminData();
    //   }
    // }, [user.role]);

    // স্টেট ডেরাইভড ভ্যালু
    // useEffect(() => {
    //   const filteredList = allItems.filter(item => item.category === selectedCategory);
    //   setFilteredItems(filteredList);
    // }, [selectedCategory, allItems]);

    // ২১. রিয়েলটাইম কমিউনিকেশন (Real-Time Communication)
    // WebRTC কানেকশন
    // useEffect(() => {
    //   const peer = new RTCPeerConnection(config);
    //   peer.onicecandidate = handleICECandidate;
    //   return () => peer.close();
    // }, []);

    // সিগনালিং সার্ভার
    // useEffect(() => {
    //   const socket = io('https://signaling-server.com');
    //   socket.on('offer', handleOffer);
    //   return () => socket.disconnect();
    // }, []);

    // ২২. এনভায়রনমেন্ট চেক (Environment Checks)
    // ডেভ/প্রড চেক
    // useEffect(() => {
    //   if (process.env.NODE_ENV === 'development') {
    //     enableDebugTools();
    //   }
    // }, []);

    // ব্রাউজার ফিচার ডিটেকশন
    // useEffect(() => {
    //   if ('IntersectionObserver' in window) {
    //     setObserverSupported(true);
    //   }
    // }, []);

    // ২৩. ইন্টারেক্টিভ ম্যাপস (Interactive Maps)
    // লিফলেট ম্যাপ
    // useEffect(() => {
    //   const map = L.map('map').setView([51.505, -0.09], 13);
    //   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    //   return () => map.remove();
    // }, []);

    // গুগল ম্যাপস মার্কার আপডেট
    // useEffect(() => {
    //   if (map && locations) {
    //     locations.forEach(location => new google.maps.Marker({ map, position: location }));
    //   }
    // }, [locations]);

    // ২৪. টেস্টিং ও ডিবাগিং (Testing & Debugging)
    // মক API কল
    // useEffect(() => {
    //   if (process.env.NODE_ENV === 'test') {
    //     setMockData(mockResponse);
    //   }
    // }, []);

    // //
    // লগ রকেট ইনিশিয়ালাইজ
    // useEffect(() => {
    //   LogRocket.init('app-id');
    // }, []);

    // ২৫. কাস্টম হুকস (Custom Hooks)
    // ইউজার অ্যাক্টিভিটি ট্র্যাক
    // useEffect(() => {
    //   const handleActivity = () => setLastActive(Date.now());
    //   window.addEventListener('mousemove', handleActivity);
    //   return () => window.removeEventListener('mousemove', handleActivity);
    // }, []);

    // উইন্ডো ফোকাস ট্র্যাক
    // useEffect(() => {
    //   const handleFocus = () => setIsWindowFocused(true);
    //   const handleBlur = () => setIsWindowFocused(false);
    //   window.addEventListener('focus', handleFocus);
    //   window.addEventListener('blur', handleBlur);
    //   return () => {
    //     window.removeEventListener('focus', handleFocus);
    //     window.removeEventListener('blur', handleBlur);
    //   };
    // }, []);

    // ২৬. মিসেলেনিয়াস (Miscellaneous)
    // প্রিন্ট ডায়লগ ডিটেক্ট
    // useEffect(() => {
    //   const handleBeforePrint = () => console.log('Printing started');
    //   window.addEventListener('beforeprint', handleBeforePrint);
    //   return () => window.removeEventListener('beforeprint', handleBeforePrint);
    // }, []);

    // ডিভাইস ওরিয়েন্টেশন
    // useEffect(() => {
    //   const handleOrientation = (e) => setOrientation(e.alpha);
    //   window.addEventListener('deviceorientation', handleOrientation);
    //   return () => window.removeEventListener('deviceorientation', handleOrientation);
    // }, []);

    // ভয়েস রিকগনিশন
    // useEffect(() => {
    //   const recognition = new webkitSpeechRecognition();
    //   recognition.onresult = (e) => setTranscript(e.results[0][0].transcript);
    //   recognition.start();
    //   return () => recognition.stop();
    // }, []);

    // ভাইব্রেশন API
    // useEffect(() => {
    //   if (notification) {
    //     navigator.vibrate(200);
    //   }
    // }, [notification]);

    // ইন্টারন্যাশনালাইজেশন (i18n)

    // useEffect(() => {
    //   i18n.changeLanguage(language);
    // }, [language]);

    // পেজ ভিজিবিলিটি (ট্যাব সুইচ)
    // jsx useEffect(() => { const handleVisibilityChange = () => { setIsTabVisible(!document.hidden); }; document.addEventListener('visibilitychange', handleVisibilityChange); return () => document.removeEventListener('visibilitychange', handleVisibilityChange); }, [])

    // useEffect(() => {
    //   setHistory(prev => [...prev, currentState]);
    // }, [currentState]);

    // ডিপেন্ডেন্সি চেইন
    // useEffect(() => {
    //   if (user.id) fetchOrders(user.id);
    // }, [user.id]); // user.id চেঞ্জ হলে অর্ডার ফেচ

    // স্টেটের সাথে লোকাল স্টোরেজ সিঙ্ক
    // useEffect(() => {
    //   const saved = localStorage.getItem('multi-step-form');
    //   if (saved) setSteps(JSON.parse(saved));
    // }, []);

    // useEffect(() => {
    //   localStorage.setItem('multi-step-form', JSON.stringify(steps));
    // }, [steps]);

    // স্টেট ডিবাউন্সিং (লজিক এক্সট্রাক্ট)
    // useEffect(() => {
    //   const timer = setTimeout(() => {
    //     validateForm(formState);
    //   }, 500);
    //   return () => clearTimeout(timer);
    // }, [formState]);

    // কম্পোনেন্ট মাউন্ট স্টেট
    // const [isMounted, setIsMounted] = useState(false);
    // useEffect(() => {
    //   setIsMounted(true);
    //   return () => setIsMounted(false);
    // }, []);

    // ২৮. রিয়েলটাইম ফিচারস (Real-Time Features)
    // লাইভ এডিটিং (Collaborative)
    // useEffect(() => {
    //   socket.on('document-update', (content) => {
    //     setDocContent(content);
    //   });
    //   return () => socket.off('document-update');
    // }, []);

    // অনলাইন ইউজার লিস্ট
    // useEffect(() => {
    //   presenceAPI.subscribe('user-list', (users) => {
    //     setOnlineUsers(users);
    //   });
    //   return () => presenceAPI.unsubscribe('user-list');
    // }, []);

    // রিয়েলটাইম ভোটিং সিস্টেম
    // useEffect(() => {
    //   const channel = pusher.subscribe('poll-channel');
    //   channel.bind('vote-added', updateLiveResults);
    //   return () => pusher.unsubscribe('poll-channel');
    // }, []);

    // চ্যাট মেসেজ টাইপিং ইন্ডিকেটর
    // useEffect(() => {
    //   if (isTyping) {
    //     socket.emit('typing', true);
    //     const timeout = setTimeout(() => socket.emit('typing', false), 1000);
    //     return () => clearTimeout(timeout);
    //   }
    // }, [isTyping]);

    // লাইভ স্পোর্টস স্কোর
    // useEffect(() => {
    //   const eventSource = new EventSource('/live-scores');
    //   eventSource.onmessage = (e) => updateScores(JSON.parse(e.data));
    //   return () => eventSource.close();
    // }, []);

    // ২৯. ওয়েব ওয়ার্কার্স & ব্যাকগ্রাউন্ড টাস্কস
    // হেভি ক্যালকুলেশনের জন্য ওয়েব ওয়ার্কার
    // useEffect(() => {
    //   const worker = new Worker('heavy-task.js');
    //   worker.postMessage(data);
    //   worker.onmessage = (e) => setResult(e.data);
    //   return () => worker.terminate();
    // }, [data]);

    // অফস্ক্রিন ক্যানভাস রেন্ডার
    // useEffect(() => {
    //   const offscreenCanvas = document.createElement('canvas');
    //   const ctx = offscreenCanvas.getContext('2d');
    //   // ব্যাকগ্রাউন্ডে রেন্ডার
    //   return () => offscreenCanvas.remove();
    // }, []);

    // ব্যাকগ্রাউন্ড সিঙ্ক্রোনাইজেশন
    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     syncWithBackend();
    //   }, 60_000);
    //   return () => clearInterval(interval);
    // }, []);

    // ৩০. এডভান্সড ডোম ইন্টারঅ্যাকশন
    // ড্রাগ অ্যান্ড ড্রপ
    // useEffect(() => {
    //   const dragElement = document.getElementById('draggable');
    //   dragElement.addEventListener('dragstart', handleDragStart);
    //   return () => dragElement.removeEventListener('dragstart', handleDragStart);
    // }, []);

    // কনটেক্সট মেনু কাস্টমাইজ
    // useEffect(() => {
    //   const handleContextMenu = (e) => {
    //     e.preventDefault();
    //     showCustomMenu(e.clientX, e.clientY);
    //   };
    //   document.addEventListener('contextmenu', handleContextMenu);
    //   return () => document.removeEventListener('contextmenu', handleContextMenu);
    // }, []);

    // এলিমেন্ট রিসাইজ অবজার্ভার

    // useEffect(() => {
    //   const observer = new ResizeObserver(entries => {
    //     setDimensions(entries[0].contentRect);
    //   });
    //   observer.observe(elementRef.current);
    //   return () => observer.disconnect();
    // }, []);

    // ডায়নামিক টুলটিপ পজিশনিং

    // useEffect(() => {
    //   const updatePosition = () => {
    //     const rect = buttonRef.current.getBoundingClientRect();
    //     setTooltipPos({ x: rect.left, y: rect.top });
    //   };
    //   window.addEventListener('scroll', updatePosition);
    //   return () => window.removeEventListener('scroll', updatePosition);
    // }, []);

    // ৩১. সিকিউরিটি & অথেন্টিকেশন
    // অটো লগআউট টাইমার

    // useEffect(() => {
    //   let timeout;
    //   const resetTimer = () => {
    //     clearTimeout(timeout);
    //     timeout = setTimeout(logout, 15 * 60 * 1000); // 15 মিনিট
    //   };
    //   window.addEventListener('mousemove', resetTimer);
    //   return () => {
    //     clearTimeout(timeout);
    //     window.removeEventListener('mousemove', resetTimer);
    //   };
    // }, []);

    // জেএস টোকেন রিফ্রেশ
    // useEffect(() => {
    //   const refreshTokenInterval = setInterval(() => {
    //     refreshAuthToken();
    //   }, 55 * 60 * 1000); // 55 মিনিট পর পর
    //   return () => clearInterval(refreshTokenInterval);
    // }, []);

    // পাসওয়ার্ড স্ট্রেন্থ মিটার

    // useEffect(() => {
    //   const strength = calculatePasswordStrength(password);
    //   setPasswordStrength(strength);
    // }, [password]);

    // ৩২. পারফরম্যান্স মনিটরিং
    // কম্পোনেন্ট রেন্ডার কাউন্ট

    // useEffect(() => {
    //   console.log('Component rendered:', renderCount.current++);
    // });

    // API রেসপন্স টাইম
    // useEffect(() => {
    //   const start = Date.now();
    //   fetchAPI().then(() => {
    //     const duration = Date.now() - start;
    //     logAPIPerformance(duration);
    //   });
    // }, []);

    // মেমোরি লিক ডিটেকশন
    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     if (performance.memory.usedJSHeapSize > 500_000_000) {
    //       alert('Memory leak detected!');
    //     }
    //   }, 5000);
    //   return () => clearInterval(interval);
    // }, []);

    // ৩৩. থার্ড-পার্টি লাইব্রেরি ইন্টিগ্রেশন
    // PDF.js দিয়ে PDF রেন্ডার
    // useEffect(() => {
    //   pdfjsLib.getDocument(url).promise.then(pdf => {
    //     setPdfDoc(pdf);
    //   });
    // }, [url]);

    // চার্ট.js আপডেট
    // useEffect(() => {
    //   if (chartRef.current) {
    //     chartRef.current.data.datasets[0].data = newData;
    //     chartRef.current.update();
    //   }
    // }, [newData]);

    // ড্র্যাগন ড্রপ (DnD লাইব্রেরি)
    // useEffect(() => {
    //   const drake = dragula([containerRef.current]);
    //   return () => drake.destroy();
    // }, []);

    // ম্যাপবক্স গ্ল এলিমেন্ট

    // useEffect(() => {
    //   const map = new mapboxgl.Map({
    //     container: mapContainerRef.current,
    //     style: 'mapbox://styles/mapbox/streets-v11'
    //   });
    //   return () => map.remove();
    // }, []);

    // ৩৪. অ্যাক্সেসিবিলিটি (Accessibility)
    // ফোকাস ম্যানেজমেন্ট (স্ক্রিন রিডার)
    // useEffect(() => {
    //   if (modalOpen) {
    //     const firstInput = modalRef.current.querySelector('input');
    //     firstInput.focus();
    //   }
    // }, [modalOpen]);

    // কীবোর্ড ন্যাভিগেশন
    // useEffect(() => {
    //   const handleArrowKeys = (e) => {
    //     if (e.key === 'ArrowDown') moveSelection(1);
    //     if (e.key === 'ArrowUp') moveSelection(-1);
    //   };
    //   document.addEventListener('keydown', handleArrowKeys);
    //   return () => document.removeEventListener('keydown', handleArrowKeys);
    // }, []);

    // ৩৫. মিডিয়া & ডিভাইস APIs
    // স্ক্রিন ব্রাইটনেস কন্ট্রোল

    // useEffect(() => {
    //   if ('screen' in window) {
    //     window.screen.orientation.lock('portrait');
    //   }
    // }, []);

    // ব্লুটুথ ডিভাইস স্ক্যান
    // useEffect(() => {
    //   navigator.bluetooth.requestDevice({ acceptAllDevices: true })
    //     .then(device => setBluetoothDevice(device));
    // }, []);

    // USB ডিভাইস অ্যাক্সেস

    // useEffect(() => {
    //   navigator.usb.requestDevice({ filters: [] })
    //     .then(device => connectToUSB(device));
    // }, []);

    // ৩৬. এডভান্সড নেটওয়ার্কিং
    // গ্রাফকিউয়েল সাবস্ক্রিপশন
    // useEffect(() => {
    //   const subscription = client.subscribe({ query: SUBSCRIPTION_QUERY })
    //     .subscribe({ next: handleData });
    //   return () => subscription.unsubscribe();
    // }, []);

    // HTTP/2 সার্ভার পুশ

    // useEffect(() => {
    //   const session = http2.connect('https://server.com');
    //   session.on('stream', handleServerPush);
    //   return () => session.destroy();
    // }, []);

    // ৩৭. কাস্টম হুকস (Reusable Logic)
    // উইন্ডো সাইজ হুক

    // function useWindowSize() {
    //   const [size, setSize] = useState({ width: 0, height: 0 });
    //   useEffect(() => {
    //     const handleResize = () => setSize({
    //       width: window.innerWidth,
    //       height: window.innerHeight
    //     });
    //     window.addEventListener('resize', handleResize);
    //     return () => window.removeEventListener('resize', handleResize);
    //   }, []);
    //   return size;
    // }

    // লোকাল স্টোরেজ হুক
    // function useLocalStorage(key, initialValue) {
    //   const [value, setValue] = useState(() => {
    //     const stored = localStorage.getItem(key);
    //     return stored ? JSON.parse(stored) : initialValue;
    //   });
    //   useEffect(() => {
    //     localStorage.setItem(key, JSON.stringify(value));
    //   }, [value, key]);
    //   return [value, setValue];
    // }

    // ৩৮. এডজ প্রোডাক্টিভিটি
    // অটো-সেভ ড্রাফ্ট

    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     if (hasUnsavedChanges) saveDraftAutomatically();
    //   }, 30_000);
    //   return () => clearInterval(interval);
    // }, [hasUnsavedChanges]);

    // ক্লিপবোর্ড হিস্ট্রি
    // useEffect(() => {
    //   navigator.clipboard.readText().then(text => {
    //     addToClipboardHistory(text);
    //   });
    // }, [clipboardUpdateTrigger]);

    // ৩৯. এক্সপেরিমেন্টাল ফিচারস
    // সার্ভার সাইড রেন্ডার হাইড্রেশন
    // useEffect(() => {
    //   if (typeof window !== 'undefined') {
    //     hydrateClientSideComponents();
    //   }
    // }, []);

    // WebGL ক্যানভাস রেন্ডার
    // useEffect(() => {
    //   const canvas = document.getElementById('webgl-canvas');
    //   const gl = canvas.getContext('webgl');
    //   initWebGLScene(gl);
    //   return () => gl.getExtension('WEBGL_lose_context').loseContext();
    // }, []);

    // ৪০. মিসেলেনিয়াস
    // ব্রাউজার এক্সটেনশন কমিউনিকেশন
    // useEffect(() => {
    //   chrome.runtime.onMessage.addListener(handleExtensionMessage);
    //   return () => chrome.runtime.onMessage.removeListener(handleExtensionMessage);
    // }, []);

    // ইন-অ্যাপ টিউটোরিয়াল
    // useEffect(() => {
    //   if (firstVisit) {
    //     startTutorialWalkthrough();
    //   }
    // }, [firstVisit]);

    // ডিসপোজেবল পপআপ
    // useEffect(() => {
    //   const timeout = setTimeout(() => {
    //     showTemporaryPopup('Welcome!', 3000);
    //   }, 1000);
    //   return () => clearTimeout(timeout);
    // }, []);

    // ডিভাইস ব্যাটারি লেভেল
    // useEffect(() => {
    //   navigator.getBattery().then(battery => {
    //     setBatteryLevel(Math.floor(battery.level * 100));
    //   });
    // }, []);

    // লাইট/ডার্ক মোড সিস্টেম প্রেফারেন্স
    // useEffect(() => {
    //   const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    //   const handler = (e) => setTheme(e.matches ? 'dark' : 'light');
    //   mediaQuery.addListener(handler);
    //   return () => mediaQuery.removeListener(handler);
    // }, []);

    // পেজ স্ক্রল প্রোগ্রেস বার
    // useEffect(() => {
    //   const updateProgress = () => {
    //     const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    //     const scrolled = (window.scrollY / scrollHeight) * 100;
    //     setScrollProgress(scrolled);
    //   };
    //   window.addEventListener('scroll', updateProgress);
    //   return () => window.removeEventListener('scroll', updateProgress);
    // }, []);

    // স্পিচ টু টেক্সট
    // useEffect(() => {
    //   const recognition = new window.webkitSpeechRecognition();
    //   recognition.continuous = true;
    //   recognition.onresult = (e) => setTranscript(e.results[0][0].transcript);
    //   recognition.start();
    //   return () => recognition.stop();
    // }, []);

    // অটোমেটিক ট্রান্সলেশন
    // useEffect(() => {
    //   if (language !== 'en') {
    //     translatePageContent(language);
    //   }
    // }, [language]);

    // ইমেজ লেযি লোডিং
    // useEffect(() => {
    //   const observer = new IntersectionObserver((entries) => {
    //     entries.forEach(entry => {
    //       if (entry.isIntersecting) {
    //         entry.target.src = entry.target.dataset.src;
    //         observer.unobserve(entry.target);
    //       }
    //     });
    //   });
    //   imagesRef.current.forEach(img => observer.observe(img));
    //   return () => observer.disconnect();
    // }, []);

    // কাস্টম কার্সর এনিমেশন
    // useEffect(() => {
    //   document.body.style.cursor = 'url(custom-cursor.png), auto';
    //   return () => document.body.style.cursor = 'default';
    // }, []);

    <div>
      <h1>All useEffect example </h1>
    </div>
  );
};

export default App;

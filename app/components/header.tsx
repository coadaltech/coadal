'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, ArrowRight, Smartphone, Brain, Box, Coins, Layers, Users, Code, Palette, Cloud, Heart, DollarSign, GraduationCap, ShoppingCart, Heart as HeartIcon, Building2, Briefcase, Trophy, Activity, BookOpen, FileText, Award, Video, Download, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface DropdownItem {
  title: string;
  description: string;
  href: string;
}

interface ServiceCategory {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdownItems: DropdownItem[];
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [leftSideVisible, setLeftSideVisible] = useState(false);
  const [centerVisible, setCenterVisible] = useState(false);
  const [industriesLeftVisible, setIndustriesLeftVisible] = useState(false);
  const [industriesCenterVisible, setIndustriesCenterVisible] = useState(false);
  const [menuDropdownOpen, setMenuDropdownOpen] = useState(false);
  const [companyLeftVisible, setCompanyLeftVisible] = useState(false);
  const [companyCenterVisible, setCompanyCenterVisible] = useState(false);
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  const [selectedResource, setSelectedResource] = useState<string | null>(null);
  const [sportsLeftVisible, setSportsLeftVisible] = useState(false);
  const [sportsCenterVisible, setSportsCenterVisible] = useState(false);
  const [resourcesLeftVisible, setResourcesLeftVisible] = useState(false);
  const [resourcesCenterVisible, setResourcesCenterVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuDropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      // Check if click is outside Services/Industries dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setActiveDropdown(null);
        setSelectedCategory(null);
        setSelectedIndustry(null);
        setLeftSideVisible(false);
        setCenterVisible(false);
        setIndustriesLeftVisible(false);
        setIndustriesCenterVisible(false);
      }
      
      // Check if click is outside Company menu dropdown
      if (menuDropdownRef.current && !menuDropdownRef.current.contains(target)) {
        setMenuDropdownOpen(false);
      }
      
      // If clicking outside both, close everything
      if (dropdownRef.current && !dropdownRef.current.contains(target) && 
          menuDropdownRef.current && !menuDropdownRef.current.contains(target)) {
        setActiveDropdown(null);
        setMenuDropdownOpen(false);
        setSelectedCategory(null);
        setSelectedIndustry(null);
        setLeftSideVisible(false);
        setCenterVisible(false);
        setIndustriesLeftVisible(false);
        setIndustriesCenterVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Service Categories for Left Side with related services
  const serviceCategories: ServiceCategory[] = [
    {
      title: 'Mobile App Development',
      description: 'Innovative Solutions For Every Platform',
      icon: <Smartphone className="w-6 h-6" />,
      href: '/services/mobile-development',
    },
    {
      title: 'AI Development',
      description: 'Best AI Development Service',
      icon: <Brain className="w-6 h-6" />,
      href: '/services/ai-development',
    },
    {
      title: 'Blockchain App Development',
      description: 'Secure Blockchain-Based App Solutions',
      icon: <Box className="w-6 h-6" />,
      href: '/services/blockchain',
    },
    {
      title: 'Coin And Tokens Development',
      description: 'Custom Cryptocurrency Creation Made Easy',
      icon: <Coins className="w-6 h-6" />,
      href: '/services/crypto-development',
    },
    {
      title: 'Full Stack Development',
      description: 'In-Depth End-To-End Development Services',
      icon: <Layers className="w-6 h-6" />,
      href: '/services/fullstack',
    },
    {
      title: 'Hire Dedicated Developers',
      description: 'Skilled Developers For Your Projects',
      icon: <Users className="w-6 h-6" />,
      href: '/services/hire-developers',
    },
  ];

  // Map categories to their related services
  const categoryServicesMap: { [key: string]: DropdownItem[] } = {
    'Mobile App Development': [
      { title: 'Mobile App Development', description: '', href: '/services/mobile-development' },
      { title: 'Hybrid Mobile App Development', description: '', href: '/services/hybrid-mobile' },
      { title: 'IOS App Development', description: '', href: '/services/ios-development' },
      { title: 'Android App Development', description: '', href: '/services/android-development' },
      { title: 'Flutter Development', description: '', href: '/services/flutter' },
      { title: 'React Native Development', description: '', href: '/services/react-native' },
      { title: 'Startup App Development', description: '', href: '/services/startup' },
      { title: 'White Label Mobile App Development', description: '', href: '/services/white-label' },
      { title: 'Roadside Assistance App Development', description: '', href: '/services/roadside-assistance' },
    ],
    'AI Development': [
      { title: 'AI Development', description: '', href: '/services/ai-development' },
      { title: 'Machine Learning Solutions', description: '', href: '/services/ml' },
      { title: 'Natural Language Processing', description: '', href: '/services/nlp' },
      { title: 'Computer Vision', description: '', href: '/services/computer-vision' },
    ],
    'Blockchain App Development': [
      { title: 'Blockchain App Development', description: '', href: '/services/blockchain' },
      { title: 'Smart Contract Development', description: '', href: '/services/smart-contracts' },
      { title: 'DeFi Solutions', description: '', href: '/services/defi' },
      { title: 'NFT Marketplace', description: '', href: '/services/nft' },
    ],
    'Coin And Tokens Development': [
      { title: 'Coin And Tokens Development', description: '', href: '/services/crypto-development' },
      { title: 'Token Creation', description: '', href: '/services/token-creation' },
      { title: 'ICO Development', description: '', href: '/services/ico' },
      { title: 'Crypto Wallet Development', description: '', href: '/services/crypto-wallet' },
    ],
    'Full Stack Development': [
      { title: 'Full Stack Development', description: '', href: '/services/fullstack' },
      { title: 'Web Development', description: '', href: '/services/web-development' },
      { title: 'Backend Development', description: '', href: '/services/backend' },
      { title: 'Frontend Development', description: '', href: '/services/frontend' },
      { title: 'E-Commerce', description: '', href: '/services/ecommerce' },
    ],
    'Hire Dedicated Developers': [
      { title: 'Hire Dedicated Developers', description: '', href: '/services/hire-developers' },
      { title: 'Application Consulting Service', description: '', href: '/services/consulting' },
      { title: 'Team Augmentation', description: '', href: '/services/team-augmentation' },
    ],
  };

  // Industry Categories for Left Side
  const industryCategories: ServiceCategory[] = [
    {
      title: 'Healthcare App Development',
      description: 'Transforming Healthcare With Smart Apps',
      icon: <Heart className="w-6 h-6" />,
      href: '/industries/healthcare',
    },
    {
      title: 'Finance App Development',
      description: 'Transforming Financial Ideas Into Apps',
      icon: <DollarSign className="w-6 h-6" />,
      href: '/industries/finance',
    },
    {
      title: 'Education App Development',
      description: 'Customized Applications For Every Industry',
      icon: <GraduationCap className="w-6 h-6" />,
      href: '/industries/education',
    },
    {
      title: 'Ecommerce Development',
      description: 'Empowering Seamless Online Shopping',
      icon: <ShoppingCart className="w-6 h-6" />,
      href: '/industries/ecommerce',
    },
    {
      title: 'Dating App Development',
      description: 'Smart Solutions For Digital Romance',
      icon: <HeartIcon className="w-6 h-6" />,
      href: '/industries/dating',
    },
    {
      title: 'Enterprise Solutions',
      description: 'Business Automation Tools',
      icon: <Building2 className="w-6 h-6" />,
      href: '/industries/enterprise',
    },
  ];

  // Map industries to their related services
  const industryServicesMap: { [key: string]: DropdownItem[] } = {
    'Healthcare App Development': [
      { title: 'Healthcare App Development', description: '', href: '/industries/healthcare' },
      { title: 'Doctor Appointment App Development', description: '', href: '/industries/doctor-appointment' },
      { title: 'Medicine Delivery App Development', description: '', href: '/industries/medicine-delivery' },
      { title: 'Medicine Ordering App Development', description: '', href: '/industries/medicine-ordering' },
      { title: 'Clinical App Development', description: '', href: '/industries/clinical' },
      { title: 'Pharmacy App Development', description: '', href: '/industries/pharmacy' },
      { title: 'Telemedicine App Development', description: '', href: '/industries/telemedicine' },
      { title: 'Laboratory App Development', description: '', href: '/industries/laboratory' },
      { title: 'Health Tracking App Development', description: '', href: '/industries/health-tracking' },
    ],
    'Finance App Development': [
      { title: 'Finance App Development', description: '', href: '/industries/finance' },
      { title: 'Banking App Development', description: '', href: '/industries/banking' },
      { title: 'Payment Gateway Integration', description: '', href: '/industries/payment-gateway' },
      { title: 'Investment App Development', description: '', href: '/industries/investment' },
      { title: 'Cryptocurrency Wallet', description: '', href: '/industries/crypto-wallet' },
      { title: 'Insurance App Development', description: '', href: '/industries/insurance' },
    ],
    'Education App Development': [
      { title: 'Education App Development', description: '', href: '/industries/education' },
      { title: 'E-Learning Platform', description: '', href: '/industries/elearning' },
      { title: 'Student Management System', description: '', href: '/industries/student-management' },
      { title: 'Online Course Platform', description: '', href: '/industries/online-courses' },
      { title: 'Tutoring App Development', description: '', href: '/industries/tutoring' },
    ],
    'Ecommerce Development': [
      { title: 'Ecommerce Development', description: '', href: '/industries/ecommerce' },
      { title: 'Online Store Development', description: '', href: '/industries/online-store' },
      { title: 'Marketplace Platform', description: '', href: '/industries/marketplace' },
      { title: 'Shopping Cart Integration', description: '', href: '/industries/shopping-cart' },
      { title: 'Inventory Management', description: '', href: '/industries/inventory' },
    ],
    'Dating App Development': [
      { title: 'Dating App Development', description: '', href: '/industries/dating' },
      { title: 'Social Networking App', description: '', href: '/industries/social-networking' },
      { title: 'Matchmaking Platform', description: '', href: '/industries/matchmaking' },
    ],
    'Enterprise Solutions': [
      { title: 'Enterprise Solutions', description: '', href: '/industries/enterprise' },
      { title: 'SaaS Solutions', description: '', href: '/industries/saas' },
      { title: 'Business Automation Tools', description: '', href: '/industries/automation' },
      { title: 'Analytics Platform', description: '', href: '/industries/analytics' },
      { title: 'CRM Development', description: '', href: '/industries/crm' },
    ],
  };

  // Sports Categories for Left Side
  const sportsCategories: ServiceCategory[] = [
    {
      title: 'Cricket Live Line API',
      description: 'Real-Time Cricket Updates API',
      icon: <Trophy className="w-6 h-6" />,
      href: '/sports/cricket',
    },
    {
      title: 'Football Live Line API',
      description: 'Real-Time Football Updates API',
      icon: <Activity className="w-6 h-6" />,
      href: '/sports/football',
    },
    {
      title: 'Basketball Live Line API',
      description: 'Real-Time Basketball Updates API',
      icon: <Trophy className="w-6 h-6" />,
      href: '/sports/basketball',
    },
    {
      title: 'Tennis Live Line API',
      description: 'Real-Time Tennis Updates API',
      icon: <Activity className="w-6 h-6" />,
      href: '/sports/tennis',
    },
    {
      title: 'Hockey Live Line API',
      description: 'Real-Time Hockey Updates API',
      icon: <Trophy className="w-6 h-6" />,
      href: '/sports/hockey',
    },
    {
      title: 'Sports Solution Development',
      description: 'Real-Time Sports Solution Updates API',
      icon: <Activity className="w-6 h-6" />,
      href: '/sports/solutions',
    },
  ];

  // Map sports categories to their related services
  const sportsServicesMap: { [key: string]: DropdownItem[] } = {
    'Cricket Live Line API': [
      { title: 'Cricket Live Line API', description: '', href: '/sports/cricket' },
      { title: 'Cricket Match Updates', description: '', href: '/sports/cricket/match-updates' },
      { title: 'Cricket Score API', description: '', href: '/sports/cricket/score' },
      { title: 'Cricket Player Stats', description: '', href: '/sports/cricket/player-stats' },
    ],
    'Football Live Line API': [
      { title: 'Football Live Line API', description: '', href: '/sports/football' },
      { title: 'Football Match Updates', description: '', href: '/sports/football/match-updates' },
      { title: 'Football Score API', description: '', href: '/sports/football/score' },
      { title: 'Football League Data', description: '', href: '/sports/football/league' },
    ],
    'Basketball Live Line API': [
      { title: 'Basketball Live Line API', description: '', href: '/sports/basketball' },
      { title: 'NBA Live Line API', description: '', href: '/sports/basketball/nba' },
      { title: 'Basketball Score API', description: '', href: '/sports/basketball/score' },
      { title: 'Basketball Player Stats', description: '', href: '/sports/basketball/player-stats' },
    ],
    'Tennis Live Line API': [
      { title: 'Tennis Live Line API', description: '', href: '/sports/tennis' },
      { title: 'Tennis Match Updates', description: '', href: '/sports/tennis/match-updates' },
      { title: 'Tennis Score API', description: '', href: '/sports/tennis/score' },
      { title: 'Tennis Tournament Data', description: '', href: '/sports/tennis/tournament' },
    ],
    'Hockey Live Line API': [
      { title: 'Hockey Live Line API', description: '', href: '/sports/hockey' },
      { title: 'Hockey Match Updates', description: '', href: '/sports/hockey/match-updates' },
      { title: 'Hockey Score API', description: '', href: '/sports/hockey/score' },
    ],
    'Sports Solution Development': [
      { title: 'Sports Solution Development', description: '', href: '/sports/solutions' },
      { title: 'Sports Live Line API', description: '', href: '/sports/live-line' },
      { title: 'Custom Sports API', description: '', href: '/sports/custom-api' },
    ],
  };

  // Resources Categories for Left Side
  const resourcesCategories: ServiceCategory[] = [
    {
      title: 'Blog',
      description: 'Latest articles and insights',
      icon: <BookOpen className="w-6 h-6" />,
      href: '/resources/blog',
    },
    {
      title: 'Documentation',
      description: 'Technical guides and docs',
      icon: <FileText className="w-6 h-6" />,
      href: '/resources/documentation',
    },
    {
      title: 'Case Studies',
      description: 'Success stories from clients',
      icon: <Award className="w-6 h-6" />,
      href: '/resources/case-studies',
    },
    {
      title: 'Video Tutorials',
      description: 'Learn from video guides',
      icon: <Video className="w-6 h-6" />,
      href: '/resources/videos',
    },
    {
      title: 'Downloads',
      description: 'Resources and templates',
      icon: <Download className="w-6 h-6" />,
      href: '/resources/downloads',
    },
    {
      title: 'Help Center',
      description: 'Get support and answers',
      icon: <HelpCircle className="w-6 h-6" />,
      href: '/resources/help',
    },
  ];

  // Map resources categories to their related items
  const resourcesServicesMap: { [key: string]: DropdownItem[] } = {
    'Blog': [
      { title: 'Blog', description: '', href: '/resources/blog' },
      { title: 'Latest Articles', description: '', href: '/resources/blog/latest' },
      { title: 'Tech News', description: '', href: '/resources/blog/tech-news' },
      { title: 'Industry Insights', description: '', href: '/resources/blog/insights' },
      { title: 'Development Tips', description: '', href: '/resources/blog/tips' },
    ],
    'Documentation': [
      { title: 'Documentation', description: '', href: '/resources/documentation' },
      { title: 'API Documentation', description: '', href: '/resources/documentation/api' },
      { title: 'Developer Guides', description: '', href: '/resources/documentation/guides' },
      { title: 'Integration Docs', description: '', href: '/resources/documentation/integration' },
      { title: 'SDK Documentation', description: '', href: '/resources/documentation/sdk' },
    ],
    'Case Studies': [
      { title: 'Case Studies', description: '', href: '/resources/case-studies' },
      { title: 'Client Success Stories', description: '', href: '/resources/case-studies/success' },
      { title: 'Project Showcases', description: '', href: '/resources/case-studies/showcases' },
      { title: 'Industry Solutions', description: '', href: '/resources/case-studies/industry' },
    ],
    'Video Tutorials': [
      { title: 'Video Tutorials', description: '', href: '/resources/videos' },
      { title: 'Getting Started Videos', description: '', href: '/resources/videos/getting-started' },
      { title: 'Advanced Tutorials', description: '', href: '/resources/videos/advanced' },
      { title: 'Webinars', description: '', href: '/resources/videos/webinars' },
    ],
    'Downloads': [
      { title: 'Downloads', description: '', href: '/resources/downloads' },
      { title: 'Templates', description: '', href: '/resources/downloads/templates' },
      { title: 'Tools & Utilities', description: '', href: '/resources/downloads/tools' },
      { title: 'Whitepapers', description: '', href: '/resources/downloads/whitepapers' },
    ],
    'Help Center': [
      { title: 'Help Center', description: '', href: '/resources/help' },
      { title: 'FAQs', description: '', href: '/resources/help/faq' },
      { title: 'Support Tickets', description: '', href: '/resources/help/support' },
      { title: 'Community Forum', description: '', href: '/resources/help/forum' },
    ],
  };

  const navItems: NavItem[] = [
    {
      label: 'Services',
      href: '/services',
      dropdownItems: [
        {
          title: 'Mobile App Development',
          description: 'iOS and Android app development',
          href: '/services/mobile-development',
        },
        {
          title: 'Application Consulting Service',
          description: 'Expert guidance for your projects',
          href: '/services/consulting',
        },
        {
          title: 'Hybrid Mobile App Development',
          description: 'Cross-platform mobile solutions',
          href: '/services/hybrid-mobile',
        },
        {
          title: 'IOS App Development',
          description: 'Native iOS applications',
          href: '/services/ios-development',
        },
        {
          title: 'Android App Development',
          description: 'Native Android applications',
          href: '/services/android-development',
        },
        {
          title: 'Flutter Development',
          description: 'Flutter-based mobile apps',
          href: '/services/flutter',
        },
        {
          title: 'React Native Development',
          description: 'React Native mobile solutions',
          href: '/services/react-native',
        },
        {
          title: 'E-Commerce',
          description: 'Online store development',
          href: '/services/ecommerce',
        },
        {
          title: 'Startup App Development',
          description: 'Solutions for startups',
          href: '/services/startup',
        },
        {
          title: 'White Label Mobile App Development',
          description: 'Customizable app solutions',
          href: '/services/white-label',
        },
        {
          title: 'Roadside Assistance App Development',
          description: 'Specialized assistance apps',
          href: '/services/roadside-assistance',
        },
      ],
    },
    {
      label: 'Industries',
      href: '/industries',
      dropdownItems: [
        {
          title: 'Healthcare App Development',
          description: 'Transforming Healthcare With Smart Apps',
          href: '/industries/healthcare',
        },
        {
          title: 'Finance App Development',
          description: 'Transforming Financial Ideas Into Apps',
          href: '/industries/finance',
        },
        {
          title: 'Education App Development',
          description: 'Customized Applications For Every Industry',
          href: '/industries/education',
        },
        {
          title: 'Ecommerce Development',
          description: 'Empowering Seamless Online Shopping',
          href: '/industries/ecommerce',
        },
        {
          title: 'Dating App Development',
          description: 'Smart Solutions For Digital Romance',
          href: '/industries/dating',
        },
        {
          title: 'Enterprise Solutions',
          description: 'Business Automation Tools',
          href: '/industries/enterprise',
        },
      ],
    },
    {
      label: 'Sports',
      href: '/sports',
      dropdownItems: [
        {
          title: 'Cricket Live Line API',
          description: 'Real-Time Cricket Updates API',
          href: '/sports/cricket',
        },
        {
          title: 'Football Live Line API',
          description: 'Real-Time Football Updates API',
          href: '/sports/football',
        },
        {
          title: 'Basketball Live Line API',
          description: 'Real-Time Basketball Updates API',
          href: '/sports/basketball',
        },
        {
          title: 'Tennis Live Line API',
          description: 'Real-Time Tennis Updates API',
          href: '/sports/tennis',
        },
        {
          title: 'Hockey Live Line API',
          description: 'Real-Time Hockey Updates API',
          href: '/sports/hockey',
        },
        {
          title: 'Baseball Live Line API',
          description: 'Real-Time Baseball Updates API',
          href: '/sports/baseball',
        },
        {
          title: 'Golf Live Line API',
          description: 'Real-Time Golf Updates API',
          href: '/sports/golf',
        },
        {
          title: 'Boxing Live Line API',
          description: 'Real-Time Boxing Updates API',
          href: '/sports/boxing',
        },
        {
          title: 'Rugby Live Line API',
          description: 'Real-Time Rugby Updates API',
          href: '/sports/rugby',
        },
        {
          title: 'Volleyball Live Line API',
          description: 'Real-Time Volleyball Updates API',
          href: '/sports/volleyball',
        },
        {
          title: 'Kabaddi Live Line API',
          description: 'Real-Time Kabaddi Updates API',
          href: '/sports/kabaddi',
        },
        {
          title: 'Sports Solution Development',
          description: 'Real-Time Sports Solution Updates API',
          href: '/sports/solutions',
        },
      ],
    },
    {
      label: 'Resources',
      href: '/resources',
      dropdownItems: [
        {
          title: 'Blog',
          description: 'Latest articles and insights',
          href: '/resources/blog',
        },
        {
          title: 'Documentation',
          description: 'Technical guides and docs',
          href: '/resources/documentation',
        },
        {
          title: 'Case Studies',
          description: 'Success stories from clients',
          href: '/resources/case-studies',
        },
        {
          title: 'Video Tutorials',
          description: 'Learn from video guides',
          href: '/resources/videos',
        },
        {
          title: 'Downloads',
          description: 'Resources and templates',
          href: '/resources/downloads',
        },
        {
          title: 'Help Center',
          description: 'Get support and answers',
          href: '/resources/help',
        },
      ],
    },
  ];

  // Company Categories for Left Side
  const companyCategories: ServiceCategory[] = [
    {
      title: 'About Us',
      description: 'Our story and mission',
      icon: <Users className="w-6 h-6" />,
      href: '/company/about',
    },
    {
      title: 'Careers',
      description: 'Join our team',
      icon: <Briefcase className="w-6 h-6" />,
      href: '/company/careers',
    },
    {
      title: 'Contact',
      description: 'Get in touch with us',
      icon: <ArrowRight className="w-6 h-6" />,
      href: '/company/contact',
    },
  ];

  // Company dropdown items for menu
  const companyItems: DropdownItem[] = [
    {
      title: 'About Us',
      description: 'Our story and mission',
      href: '/company/about',
    },
    {
      title: 'Our Team',
      description: 'Meet the people behind our success',
      href: '/company/team',
    },
    {
      title: 'Careers',
      description: 'Join our team',
      href: '/company/careers',
    },
    {
      title: 'Partnership',
      description: 'Partner with us',
      href: '/company/partnership',
    },
    {
      title: 'Awards & Recognition',
      description: 'Our achievements',
      href: '/company/awards',
    },
    {
      title: 'Global Capability Center',
      description: 'Our global presence',
      href: '/company/gcc',
    },
    {
      title: 'Press & Events',
      description: 'Latest news and events',
      href: '/company/press',
    },
    {
      title: 'Contact',
      description: 'Get in touch with us',
      href: '/company/contact',
    },
  ];

  const toggleDropdown = (label: string) => {
    // Close Company menu if any dropdown is opened
    if (menuDropdownOpen) {
      setMenuDropdownOpen(false);
    }

    if (label === 'Services') {
      if (activeDropdown === 'Services') {
        // Close
        setActiveDropdown(null);
        setSelectedCategory(null);
        setLeftSideVisible(false);
        setCenterVisible(false);
      } else {
        // Close Industries first if open
        setSelectedIndustry(null);
        setIndustriesLeftVisible(false);
        setIndustriesCenterVisible(false);
        // Open with staggered animation
        setActiveDropdown('Services');
        setSelectedCategory(serviceCategories[0].title); // Set first category as default
        setLeftSideVisible(true);
        setTimeout(() => {
          setCenterVisible(true);
        }, 150);
      }
    } else if (label === 'Industries') {
      if (activeDropdown === 'Industries') {
        // Close
        setActiveDropdown(null);
        setSelectedIndustry(null);
        setIndustriesLeftVisible(false);
        setIndustriesCenterVisible(false);
      } else {
        // Close Services/Sports first if open
        setSelectedCategory(null);
        setSelectedSport(null);
        setLeftSideVisible(false);
        setCenterVisible(false);
        setSportsLeftVisible(false);
        setSportsCenterVisible(false);
        // Open with staggered animation
        setActiveDropdown('Industries');
        setSelectedIndustry(industryCategories[0].title); // Set first category as default
        setIndustriesLeftVisible(true);
        setTimeout(() => {
          setIndustriesCenterVisible(true);
        }, 150);
      }
    } else if (label === 'Sports') {
      if (activeDropdown === 'Sports') {
        // Close
        setActiveDropdown(null);
        setSelectedSport(null);
        setSportsLeftVisible(false);
        setSportsCenterVisible(false);
      } else {
        // Close Services/Industries/Resources first if open
        setSelectedCategory(null);
        setSelectedIndustry(null);
        setSelectedResource(null);
        setLeftSideVisible(false);
        setCenterVisible(false);
        setIndustriesLeftVisible(false);
        setIndustriesCenterVisible(false);
        setResourcesLeftVisible(false);
        setResourcesCenterVisible(false);
        // Open with staggered animation
        setActiveDropdown('Sports');
        setSelectedSport(sportsCategories[0].title); // Set first category as default
        setSportsLeftVisible(true);
        setTimeout(() => {
          setSportsCenterVisible(true);
        }, 150);
      }
    } else if (label === 'Resources') {
      if (activeDropdown === 'Resources') {
        // Close
        setActiveDropdown(null);
        setSelectedResource(null);
        setResourcesLeftVisible(false);
        setResourcesCenterVisible(false);
      } else {
        // Close Services/Industries/Sports first if open
        setSelectedCategory(null);
        setSelectedIndustry(null);
        setSelectedSport(null);
        setLeftSideVisible(false);
        setCenterVisible(false);
        setIndustriesLeftVisible(false);
        setIndustriesCenterVisible(false);
        setSportsLeftVisible(false);
        setSportsCenterVisible(false);
        // Open with staggered animation
        setActiveDropdown('Resources');
        setSelectedResource(resourcesCategories[0].title); // Set first category as default
        setResourcesLeftVisible(true);
        setTimeout(() => {
          setResourcesCenterVisible(true);
        }, 150);
      }
    } else {
    setActiveDropdown(activeDropdown === label ? null : label);
      setSelectedCategory(null);
      setSelectedIndustry(null);
      setSelectedSport(null);
      setSelectedResource(null);
      setLeftSideVisible(false);
      setCenterVisible(false);
      setIndustriesLeftVisible(false);
      setIndustriesCenterVisible(false);
      setSportsLeftVisible(false);
      setSportsCenterVisible(false);
      setResourcesLeftVisible(false);
      setResourcesCenterVisible(false);
    }
  };

  const handleCategoryClick = (categoryTitle: string) => {
    setSelectedCategory(categoryTitle);
  };

  const handleIndustryClick = (industryTitle: string) => {
    setSelectedIndustry(industryTitle);
  };

  const handleSportClick = (sportTitle: string) => {
    setSelectedSport(sportTitle);
  };

  const handleResourceClick = (resourceTitle: string) => {
    setSelectedResource(resourceTitle);
  };

  // Get services for selected category or all services
  const getDisplayServices = () => {
    if (selectedCategory && categoryServicesMap[selectedCategory]) {
      return categoryServicesMap[selectedCategory];
    }
    return navItems.find(item => item.label === 'Services')?.dropdownItems || [];
  };

  // Get industries for selected industry or all industries
  const getDisplayIndustries = () => {
    if (selectedIndustry && industryServicesMap[selectedIndustry]) {
      return industryServicesMap[selectedIndustry];
    }
    return navItems.find(item => item.label === 'Industries')?.dropdownItems || [];
  };

  // Get sports for selected sport or all sports
  const getDisplaySports = () => {
    if (selectedSport && sportsServicesMap[selectedSport]) {
      return sportsServicesMap[selectedSport];
    }
    return navItems.find(item => item.label === 'Sports')?.dropdownItems || [];
  };

  // Get resources for selected resource or all resources
  const getDisplayResources = () => {
    if (selectedResource && resourcesServicesMap[selectedResource]) {
      return resourcesServicesMap[selectedResource];
    }
    return navItems.find(item => item.label === 'Resources')?.dropdownItems || [];
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveDropdown(null);
    setSelectedCategory(null);
    setSelectedIndustry(null);
    setLeftSideVisible(false);
    setCenterVisible(false);
    setIndustriesLeftVisible(false);
    setIndustriesCenterVisible(false);
  };

  const isServicesOpen = activeDropdown === 'Services';
  const isIndustriesOpen = activeDropdown === 'Industries';
  const isSportsOpen = activeDropdown === 'Sports';
  const isResourcesOpen = activeDropdown === 'Resources';

  return (
    <>
      {/* Backdrop Overlay for Mega Menu */}
      {(isServicesOpen || isIndustriesOpen || isSportsOpen || isResourcesOpen || menuDropdownOpen) && (
        <div 
          className="backdrop-overlay fixed inset-0 bg-black/20 backdrop-blur-sm z-40 animate-[fadeIn_0.2s_ease-out]"
          onClick={() => {
            // Close all dropdowns
            setActiveDropdown(null);
            setSelectedCategory(null);
            setSelectedIndustry(null);
            setSelectedSport(null);
            setSelectedResource(null);
        setLeftSideVisible(false);
        setCenterVisible(false);
        setIndustriesLeftVisible(false);
        setIndustriesCenterVisible(false);
        setSportsLeftVisible(false);
        setSportsCenterVisible(false);
        setResourcesLeftVisible(false);
        setResourcesCenterVisible(false);
        setMenuDropdownOpen(false);
        setCompanyLeftVisible(false);
        setCompanyCenterVisible(false);
          }}
        />
      )}
      
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
            ? 'backdrop-blur-md border-b border-white/10 shadow-lg bg-white/10'
            : 'backdrop-blur-sm border-b border-white/5 bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* First Div - Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center" aria-label="Home">
              <Image
                src="/logo.png"
                alt="Company Logo"
                width={140}
                height={40}
                priority
                className="object-contain brightness-0"
              />
            </Link>
          </div>

          {/* Second Div - Navigation and Button */}
          <div className="flex items-center gap-8">
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex lg:items-center" ref={dropdownRef}>
              <div className="flex items-center gap-2">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center gap-1 px-4 py-2 text-base font-medium text-[#000048] hover:text-[#000048]/90 transition-colors duration-200 cursor-pointer"
                      aria-expanded={activeDropdown === item.label}
                      aria-haspopup="true"
                    >
                      <span className="whitespace-nowrap">{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Desktop Dropdown Menu */}
                    {activeDropdown === item.label && item.label === 'Services' ? (
                      // Unique Mega Menu for Services
                      <div 
                        className="fixed left-1/2 -translate-x-1/2 top-full mt-4 w-[95vw] max-w-7xl origin-top z-50"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                          <div className="grid grid-cols-12 gap-0">
                            {/* Left Side - Service Categories */}
                            <div className={`col-span-5 bg-gradient-to-br from-[#000048] via-[#000048] to-[#1a1a5e] p-8 transition-all duration-300 ${
                              leftSideVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                            }`}>
                              <h3 className="text-white text-xl font-bold mb-6 flex items-center gap-2">
                                <Code className="w-5 h-5" />
                                Our Core Services
                              </h3>
                              <div className="space-y-2">
                                {serviceCategories.map((category, index) => (
                                  <button
                                    key={index}
                                    onClick={() => handleCategoryClick(category.title)}
                                    className={`w-full group flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 text-left cursor-pointer ${
                                      selectedCategory === category.title
                                        ? 'bg-white/15 border-white/30 shadow-lg'
                                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                                    }`}
                                  >
                                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-white transition-all duration-300 ${
                                      selectedCategory === category.title
                                        ? 'bg-white/25 scale-110'
                                        : 'bg-white/10 group-hover:bg-white/20 group-hover:scale-110'
                                    }`}>
                                      {category.icon}
                                    </div>
                                    <div className="flex-1">
                                      <h4 className={`font-semibold text-sm mb-1 transition-colors ${
                                        selectedCategory === category.title
                                          ? 'text-white'
                                          : 'text-white group-hover:text-white'
                                      }`}>
                                        {category.title}
                                      </h4>
                                      <p className="text-white/70 text-xs leading-relaxed">
                                        {category.description}
                                      </p>
                                    </div>
                                  </button>
                                ))}
                              </div>
                            </div>

                            {/* Right Side - Services List */}
                            <div className={`col-span-7 p-8 border-l border-gray-100 transition-all duration-300 ${
                              centerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                            }`}>
                              <h3 className="text-gray-900 text-xl font-bold mb-6">
                                {selectedCategory ? `${selectedCategory} Services` : 'All Services'}
                              </h3>
                              <div className="space-y-0 max-h-[500px] overflow-y-auto custom-scrollbar">
                                {getDisplayServices().map((service, index) => (
                    <Link
                                    key={index}
                                    href={service.href}
                                    className="group/item flex items-center px-4 py-4 rounded-lg hover:bg-[#000048]/5 transition-all duration-200 border-l-2 border-transparent hover:border-[#000048] cursor-pointer"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    <div className="w-2 h-2 rounded-full bg-[#000048]/30 group-hover/item:bg-[#000048] transition-colors mr-4 flex-shrink-0"></div>
                                    <p className="text-base font-semibold text-gray-900 group-hover/item:text-[#000048] transition-colors">
                                      {service.title}
                                    </p>
                    </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : activeDropdown === item.label && item.label === 'Industries' ? (
                      // Unique Mega Menu for Industries
                      <div 
                        className="fixed left-1/2 -translate-x-1/2 top-full mt-4 w-[95vw] max-w-7xl origin-top z-50"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                          <div className="grid grid-cols-12 gap-0">
                            {/* Left Side - Industry Categories */}
                            <div className={`col-span-5 bg-gradient-to-br from-[#000048] via-[#000048] to-[#1a1a5e] p-8 transition-all duration-300 ${
                              industriesLeftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                            }`}>
                              <h3 className="text-white text-xl font-bold mb-6 flex items-center gap-2">
                                <Building2 className="w-5 h-5" />
                                Our Industries
                              </h3>
                              <div className="space-y-2">
                                {industryCategories.map((industry, index) => (
                                <button
                                  key={index}
                                  onClick={() => handleIndustryClick(industry.title)}
                                  className={`w-full group flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 text-left cursor-pointer ${
                                    selectedIndustry === industry.title
                                      ? 'bg-white/15 border-white/30 shadow-lg'
                                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                                  }`}
                                >
                                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-white transition-all duration-300 ${
                                      selectedIndustry === industry.title
                                        ? 'bg-white/25 scale-110'
                                        : 'bg-white/10 group-hover:bg-white/20 group-hover:scale-110'
                                    }`}>
                                      {industry.icon}
                                    </div>
                                    <div className="flex-1">
                                      <h4 className={`font-semibold text-sm mb-1 transition-colors ${
                                        selectedIndustry === industry.title
                                          ? 'text-white'
                                          : 'text-white group-hover:text-white'
                                      }`}>
                                        {industry.title}
                                      </h4>
                                      <p className="text-white/70 text-xs leading-relaxed">
                                        {industry.description}
                                      </p>
                                    </div>
                                  </button>
                                ))}
                              </div>
                            </div>

                            {/* Right Side - Industries List */}
                            <div className={`col-span-7 p-8 border-l border-gray-100 transition-all duration-300 ${
                              industriesCenterVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                            }`}>
                              <h3 className="text-gray-900 text-xl font-bold mb-6">
                                {selectedIndustry ? `${selectedIndustry} Services` : 'All Industries'}
                              </h3>
                              <div className="space-y-0 max-h-[500px] overflow-y-auto custom-scrollbar">
                                {getDisplayIndustries().map((industryItem, index) => (
                                  <Link
                                    key={index}
                                    href={industryItem.href}
                                    className="group/item flex items-center px-4 py-4 rounded-lg hover:bg-[#000048]/5 transition-all duration-200 border-l-2 border-transparent hover:border-[#000048] cursor-pointer"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    <div className="w-2 h-2 rounded-full bg-[#000048]/30 group-hover/item:bg-[#000048] transition-colors mr-4 flex-shrink-0"></div>
                                    <p className="text-base font-semibold text-gray-900 group-hover/item:text-[#000048] transition-colors">
                                      {industryItem.title}
                                    </p>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : activeDropdown === item.label && item.label === 'Sports' ? (
                      // Unique Mega Menu for Sports
                      <div 
                        className="fixed left-1/2 -translate-x-1/2 top-full mt-4 w-[95vw] max-w-7xl origin-top z-50"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                          <div className="grid grid-cols-12 gap-0">
                            {/* Left Side - Sports Categories */}
                            <div className={`col-span-5 bg-gradient-to-br from-[#000048] via-[#000048] to-[#1a1a5e] p-8 transition-all duration-300 ${
                              sportsLeftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                            }`}>
                              <h3 className="text-white text-xl font-bold mb-6 flex items-center gap-2">
                                <Trophy className="w-5 h-5" />
                                Our Sports APIs
                              </h3>
                              <div className="space-y-2">
                                {sportsCategories.map((sport, index) => (
                                  <button
                                    key={index}
                                    onClick={() => handleSportClick(sport.title)}
                                    className={`w-full group flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 text-left cursor-pointer ${
                                      selectedSport === sport.title
                                        ? 'bg-white/15 border-white/30 shadow-lg'
                                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                                    }`}
                                  >
                                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-white transition-all duration-300 ${
                                      selectedSport === sport.title
                                        ? 'bg-white/25 scale-110'
                                        : 'bg-white/10 group-hover:bg-white/20 group-hover:scale-110'
                                    }`}>
                                      {sport.icon}
                                    </div>
                                    <div className="flex-1">
                                      <h4 className={`font-semibold text-sm mb-1 transition-colors ${
                                        selectedSport === sport.title
                                          ? 'text-white'
                                          : 'text-white group-hover:text-white'
                                      }`}>
                                        {sport.title}
                                      </h4>
                                      <p className="text-white/70 text-xs leading-relaxed">
                                        {sport.description}
                                      </p>
                                    </div>
                                  </button>
                                ))}
                              </div>
                            </div>

                            {/* Right Side - Sports List */}
                            <div className={`col-span-7 p-8 border-l border-gray-100 transition-all duration-300 ${
                              sportsCenterVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                            }`}>
                              <h3 className="text-gray-900 text-xl font-bold mb-6">
                                {selectedSport ? `${selectedSport} Services` : 'All Sports APIs'}
                              </h3>
                              <div className="space-y-0 max-h-[500px] overflow-y-auto custom-scrollbar">
                                {getDisplaySports().map((sportItem, index) => (
                                  <Link
                                    key={index}
                                    href={sportItem.href}
                                    className="group/item flex items-center px-4 py-4 rounded-lg hover:bg-[#000048]/5 transition-all duration-200 border-l-2 border-transparent hover:border-[#000048] cursor-pointer"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    <div className="w-2 h-2 rounded-full bg-[#000048]/30 group-hover/item:bg-[#000048] transition-colors mr-4 flex-shrink-0"></div>
                                    <p className="text-base font-semibold text-gray-900 group-hover/item:text-[#000048] transition-colors">
                                      {sportItem.title}
                                    </p>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : activeDropdown === item.label && item.label === 'Resources' ? (
                      // Unique Mega Menu for Resources
                      <div 
                        className="fixed left-1/2 -translate-x-1/2 top-full mt-4 w-[95vw] max-w-7xl origin-top z-50"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                          <div className="grid grid-cols-12 gap-0">
                            {/* Left Side - Resource Categories */}
                            <div className={`col-span-5 bg-gradient-to-br from-[#000048] via-[#000048] to-[#1a1a5e] p-8 transition-all duration-300 cursor-pointer ${
                              resourcesLeftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                            }`}>
                              <h3 className="text-white text-xl font-bold mb-6 flex items-center gap-2">
                                <BookOpen className="w-5 h-5" />
                                Our Resources
                              </h3>
                              <div className="space-y-2">
                                {resourcesCategories.map((resource, index) => (
                                  <button
                                    key={index}
                                    onClick={() => handleResourceClick(resource.title)}
                                    className={`w-full group flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 text-left cursor-pointer ${
                                      selectedResource === resource.title
                                        ? 'bg-white/15 border-white/30 shadow-lg'
                                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                                    }`}
                                  >
                                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-white transition-all duration-300 ${
                                      selectedResource === resource.title
                                        ? 'bg-white/25 scale-110'
                                        : 'bg-white/10 group-hover:bg-white/20 group-hover:scale-110'
                                    }`}>
                                      {resource.icon}
                                    </div>
                                    <div className="flex-1">
                                      <h4 className={`font-semibold text-base mb-1 transition-colors ${
                                        selectedResource === resource.title
                                          ? 'text-white'
                                          : 'text-white group-hover:text-white'
                                      }`}>
                                        {resource.title}
                                      </h4>
                                      <p className="text-white/70 text-sm leading-relaxed">
                                        {resource.description}
                                      </p>
                                    </div>
                                  </button>
                                ))}
                              </div>
                            </div>

                            {/* Right Side - Resources List */}
                            <div className={`col-span-7 p-8 border-l border-gray-100 transition-all duration-300 ${
                              resourcesCenterVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                            }`}>
                              <h3 className="text-gray-900 text-xl font-bold mb-6">
                                {selectedResource ? `${selectedResource} Resources` : 'All Resources'}
                              </h3>
                              <div className="space-y-0 max-h-[500px] overflow-y-auto custom-scrollbar">
                                {getDisplayResources().map((resourceItem, index) => (
                                  <Link
                                    key={index}
                                    href={resourceItem.href}
                                    className="group/item flex items-center px-4 py-4 rounded-lg hover:bg-[#000048]/5 transition-all duration-200 border-l-2 border-transparent hover:border-[#000048] cursor-pointer"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    <div className="w-2 h-2 rounded-full bg-[#000048]/30 group-hover/item:bg-[#000048] transition-colors mr-4 flex-shrink-0"></div>
                                    <p className="text-base font-semibold text-gray-900 group-hover/item:text-[#000048] transition-colors">
                                      {resourceItem.title}
                                    </p>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : activeDropdown === item.label ? (
                      // Regular Dropdown for other items
                    <div className="absolute left-0 mt-2 w-72 origin-top-left animate-[fadeIn_0.2s_ease-out]">
                        <div className="rounded-lg bg-white border border-gray-200 shadow-xl overflow-hidden">
                        <div className="p-2">
                            {item.dropdownItems.map((dropdownItem, index) => (
                            <Link
                              key={index}
                              href={dropdownItem.href}
                                className="group/item flex items-start gap-3 px-4 py-3 rounded-md hover:bg-gray-50 transition-all duration-200"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="flex-shrink-0 mt-1">
                                  <div className="w-8 h-8 rounded-md bg-[#000048d9]/10 flex items-center justify-center group-hover/item:bg-[#000048d9]/20 transition-all duration-200">
                                    <div className="w-2 h-2 rounded-full bg-[#000048d9]"></div>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-semibold text-gray-900 group-hover/item:text-[#000048d9] transition-colors duration-200">
                                    {dropdownItem.title}
                                  </p>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover/item:text-[#000048d9] group-hover/item:translate-x-1 transition-all duration-200" />
                                </div>
                                  <p className="mt-1 text-xs text-gray-600 line-clamp-1">
                                  {dropdownItem.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    ) : null}
                  </div>
                ))}

                {/* Menu Icon Button - Replacing Company */}
                <div className="relative" ref={menuDropdownRef}>
                  <button
                    onClick={() => {
                      if (menuDropdownOpen) {
                        // Close Company menu
                        setMenuDropdownOpen(false);
                        setCompanyLeftVisible(false);
                        setCompanyCenterVisible(false);
                      } else {
                        // Close Services/Industries/Sports/Resources dropdowns first
                        setActiveDropdown(null);
                        setSelectedCategory(null);
                        setSelectedIndustry(null);
                        setSelectedSport(null);
                        setSelectedResource(null);
                        setLeftSideVisible(false);
                        setCenterVisible(false);
                        setIndustriesLeftVisible(false);
                        setIndustriesCenterVisible(false);
                        setSportsLeftVisible(false);
                        setSportsCenterVisible(false);
                        setResourcesLeftVisible(false);
                        setResourcesCenterVisible(false);
                        // Then open Company menu with staggered animation
                        setMenuDropdownOpen(true);
                        setCompanyLeftVisible(true);
                        setTimeout(() => {
                          setCompanyCenterVisible(true);
                        }, 150);
                      }
                    }}
                    className="flex items-center justify-center px-3 py-2 text-base font-medium text-[#000048] hover:text-[#000048]/90 hover:bg-white/10 rounded-lg transition-all duration-200 cursor-pointer"
                    aria-expanded={menuDropdownOpen}
                    aria-label="Company Menu"
                  >
                    {menuDropdownOpen ? (
                      <X className="w-5 h-5 transition-transform duration-200" />
                    ) : (
                      <Menu className="w-5 h-5 transition-transform duration-200" />
                    )}
                  </button>

                  {/* Company Menu Dropdown - Mega Menu like Services */}
                  {menuDropdownOpen && (
                    <div 
                      className="fixed left-1/2 -translate-x-1/2 top-full mt-4 w-[95vw] max-w-7xl origin-top z-50"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                        <div className="grid grid-cols-12 gap-0">
                          {/* Left Side - Company Categories */}
                          <div className={`col-span-5 bg-gradient-to-br from-[#000048] via-[#000048] to-[#1a1a5e] p-8 transition-all duration-300 ${
                            companyLeftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                          }`}>
                            <h3 className="text-white text-xl font-bold mb-6 flex items-center gap-2">
                              <Building2 className="w-5 h-5" />
                              Our Company
                            </h3>
                            <div className="space-y-2">
                              {companyCategories.map((category, index) => (
                                <Link
                                  key={index}
                                  href={category.href}
                                  className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 hover:translate-x-1 cursor-pointer"
                                  onClick={() => setMenuDropdownOpen(false)}
                                >
                                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 group-hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110">
                                    {category.icon}
                </div>
                                  <div className="flex-1">
                                    <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-white transition-colors">
                                      {category.title}
                                    </h4>
                                    <p className="text-white/70 text-xs leading-relaxed">
                                      {category.description}
                                    </p>
                                  </div>
                                </Link>
              ))}
            </div>
          </div>

                          {/* Right Side - Company Items List */}
                          <div className={`col-span-7 p-8 border-l border-gray-100 transition-all duration-300 ${
                            companyCenterVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                          }`}>
                            <h3 className="text-gray-900 text-xl font-bold mb-6">All Company Pages</h3>
                            <div className="space-y-0 max-h-[500px] overflow-y-auto custom-scrollbar">
                              {companyItems.map((item, index) => (
                                  <Link
                                    key={index}
                                    href={item.href}
                                    className="group/item flex items-center px-4 py-4 rounded-lg hover:bg-[#000048]/5 transition-all duration-200 border-l-2 border-transparent hover:border-[#000048] cursor-pointer"
                                    onClick={() => setMenuDropdownOpen(false)}
                                  >
                                  <div className="w-2 h-2 rounded-full bg-[#000048]/30 group-hover/item:bg-[#000048] transition-colors mr-4 flex-shrink-0"></div>
                                  <p className="text-base font-semibold text-gray-900 group-hover/item:text-[#000048] transition-colors">
                                    {item.title}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:flex">
            <Link
              href="/contact"
                className="group relative px-7 py-3 text-base font-bold text-white rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#000048] via-[#1a1a5e] to-[#000048] opacity-100 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              {/* Animated Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              
              {/* Border Glow */}
              <div className="absolute inset-0 rounded-xl border-2 border-white/30 group-hover:border-white/50 transition-all duration-300"></div>
              
              {/* Content */}
              <div className="relative flex items-center gap-2 z-10">
                <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent group-hover:from-white group-hover:to-white transition-all duration-300">
                Get Started
              </span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
              
              {/* Shadow Glow */}
              <div className="absolute inset-0 rounded-xl bg-[#000048] opacity-0 group-hover:opacity-30 blur-xl -z-10 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-[#000048] hover:text-[#000048]/90 hover:bg-white/10 transition-all duration-200 cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 animate-[slideDown_0.3s_ease-out]">
            <div className="px-2 pt-2 pb-4 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.label}>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                    className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-[#000048] hover:text-[#000048]/90 hover:bg-white/10 rounded-lg transition-all duration-200 cursor-pointer"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                  {/* Mobile Mega Menu for Services */}
                  {activeDropdown === item.label && item.label === 'Services' && (
                    <div className="mt-2 space-y-2 animate-[slideDown_0.2s_ease-out]">
                      {/* Left Side Categories */}
                      <div className="bg-gradient-to-br from-[#000048] via-[#000048] to-[#1a1a5e] rounded-xl p-4 mb-3">
                        <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                          <Code className="w-5 h-5" />
                          Our Core Services
                        </h3>
                        <div className="space-y-2">
                          {serviceCategories.map((category, index) => (
                            <button
                              key={index}
                              onClick={() => handleCategoryClick(category.title)}
                              className={`w-full group flex items-start gap-3 p-3 rounded-lg border transition-all duration-300 text-left ${
                                selectedCategory === category.title
                                  ? 'bg-white/15 border-white/30'
                                  : 'bg-white/5 border-white/10'
                              }`}
                            >
                              <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-white ${
                                selectedCategory === category.title
                                  ? 'bg-white/25'
                                  : 'bg-white/10'
                              }`}>
                                {category.icon}
                              </div>
                              <div className="flex-1">
                                <h4 className="text-white font-semibold text-sm mb-1">
                                  {category.title}
                                </h4>
                                <p className="text-white/70 text-xs">
                                  {category.description}
                                </p>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      {/* Right Side Services List */}
                      <div className="bg-white rounded-xl p-4">
                        <h3 className="text-gray-900 text-lg font-bold mb-4">
                          {selectedCategory ? `${selectedCategory} Services` : 'All Services'}
                        </h3>
                        <div className="space-y-1 max-h-[400px] overflow-y-auto custom-scrollbar">
                          {getDisplayServices().map((service, index) => (
                            <Link
                              key={index}
                              href={service.href}
                              className="group/item flex items-center px-3 py-3 rounded-lg hover:bg-[#000048]/5 transition-all duration-200 cursor-pointer"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setActiveDropdown(null);
                              }}
                            >
                              <div className="w-2 h-2 rounded-full bg-[#000048]/30 group-hover/item:bg-[#000048] transition-colors mr-3 flex-shrink-0"></div>
                              <p className="text-base font-semibold text-gray-900 group-hover/item:text-[#000048] transition-colors">
                                {service.title}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Mobile Mega Menu for Sports */}
                  {activeDropdown === item.label && item.label === 'Sports' && (
                    <div className="mt-2 space-y-2 animate-[slideDown_0.2s_ease-out]">
                      {/* Left Side Categories */}
                      <div className="bg-gradient-to-br from-[#000048] via-[#000048] to-[#1a1a5e] rounded-xl p-4 mb-3">
                        <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                          <Trophy className="w-5 h-5" />
                          Our Sports APIs
                        </h3>
                        <div className="space-y-2">
                          {sportsCategories.map((sport, index) => (
                            <button
                              key={index}
                              onClick={() => handleSportClick(sport.title)}
                              className={`w-full group flex items-start gap-3 p-3 rounded-lg border transition-all duration-300 text-left cursor-pointer ${
                                selectedSport === sport.title
                                  ? 'bg-white/15 border-white/30'
                                  : 'bg-white/5 border-white/10'
                              }`}
                            >
                              <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-white ${
                                selectedSport === sport.title
                                  ? 'bg-white/25'
                                  : 'bg-white/10'
                              }`}>
                                {sport.icon}
                              </div>
                              <div className="flex-1">
                                <h4 className="text-white font-semibold text-sm mb-1">
                                  {sport.title}
                                </h4>
                                <p className="text-white/70 text-xs">
                                  {sport.description}
                                </p>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      {/* Right Side Sports List */}
                      <div className="bg-white rounded-xl p-4">
                        <h3 className="text-gray-900 text-lg font-bold mb-4">
                          {selectedSport ? `${selectedSport} Services` : 'All Sports APIs'}
                        </h3>
                        <div className="space-y-1 max-h-[400px] overflow-y-auto custom-scrollbar">
                          {getDisplaySports().map((sportItem, index) => (
                            <Link
                              key={index}
                              href={sportItem.href}
                              className="group/item flex items-center px-3 py-3 rounded-lg hover:bg-[#000048]/5 transition-all duration-200 cursor-pointer"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setActiveDropdown(null);
                              }}
                            >
                              <div className="w-2 h-2 rounded-full bg-[#000048]/30 group-hover/item:bg-[#000048] transition-colors mr-3 flex-shrink-0"></div>
                              <p className="text-base font-semibold text-gray-900 group-hover/item:text-[#000048] transition-colors">
                                {sportItem.title}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Mobile Mega Menu for Resources */}
                  {activeDropdown === item.label && item.label === 'Resources' && (
                    <div className="mt-2 space-y-2 animate-[slideDown_0.2s_ease-out]">
                      {/* Left Side Categories */}
                      <div className="bg-gradient-to-br from-[#000048] via-[#000048] to-[#1a1a5e] rounded-xl p-4 mb-3">
                        <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                          <BookOpen className="w-5 h-5" />
                          Our Resources
                        </h3>
                        <div className="space-y-2">
                          {resourcesCategories.map((resource, index) => (
                            <button
                              key={index}
                              onClick={() => handleResourceClick(resource.title)}
                              className={`w-full group flex items-start gap-3 p-3 rounded-lg border transition-all duration-300 text-left cursor-pointer ${
                                selectedResource === resource.title
                                  ? 'bg-white/15 border-white/30'
                                  : 'bg-white/5 border-white/10'
                              }`}
                            >
                              <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-white ${
                                selectedResource === resource.title
                                  ? 'bg-white/25'
                                  : 'bg-white/10'
                              }`}>
                                {resource.icon}
                              </div>
                              <div className="flex-1">
                                <h4 className="text-white font-semibold text-sm mb-1">
                                  {resource.title}
                                </h4>
                                <p className="text-white/70 text-xs">
                                  {resource.description}
                                </p>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      {/* Right Side Resources List */}
                      <div className="bg-white rounded-xl p-4">
                        <h3 className="text-gray-900 text-lg font-bold mb-4">
                          {selectedResource ? `${selectedResource} Resources` : 'All Resources'}
                        </h3>
                        <div className="space-y-1 max-h-[400px] overflow-y-auto custom-scrollbar">
                          {getDisplayResources().map((resourceItem, index) => (
                            <Link
                              key={index}
                              href={resourceItem.href}
                              className="group/item flex items-center px-3 py-3 rounded-lg hover:bg-[#000048]/5 transition-all duration-200 cursor-pointer"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setActiveDropdown(null);
                              }}
                            >
                              <div className="w-2 h-2 rounded-full bg-[#000048]/30 group-hover/item:bg-[#000048] transition-colors mr-3 flex-shrink-0"></div>
                              <p className="text-base font-semibold text-gray-900 group-hover/item:text-[#000048] transition-colors">
                                {resourceItem.title}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Mobile Mega Menu for Industries */}
                  {activeDropdown === item.label && item.label === 'Industries' && (
                    <div className="mt-2 space-y-2 animate-[slideDown_0.2s_ease-out]">
                      {/* Left Side Categories */}
                      <div className="bg-gradient-to-br from-[#000048] via-[#000048] to-[#1a1a5e] rounded-xl p-4 mb-3">
                        <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                          <Building2 className="w-5 h-5" />
                          Our Industries
                        </h3>
                        <div className="space-y-2">
                          {industryCategories.map((industry, index) => (
                            <button
                              key={index}
                              onClick={() => handleIndustryClick(industry.title)}
                              className={`w-full group flex items-start gap-3 p-3 rounded-lg border transition-all duration-300 text-left cursor-pointer ${
                                selectedIndustry === industry.title
                                  ? 'bg-white/15 border-white/30'
                                  : 'bg-white/5 border-white/10'
                              }`}
                            >
                              <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-white ${
                                selectedIndustry === industry.title
                                  ? 'bg-white/25'
                                  : 'bg-white/10'
                              }`}>
                                {industry.icon}
                              </div>
                              <div className="flex-1">
                                <h4 className="text-white font-semibold text-sm mb-1">
                                  {industry.title}
                                </h4>
                                <p className="text-white/70 text-xs">
                                  {industry.description}
                                </p>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      {/* Right Side Industries List */}
                      <div className="bg-white rounded-xl p-4">
                        <h3 className="text-gray-900 text-lg font-bold mb-4">
                          {selectedIndustry ? `${selectedIndustry} Services` : 'All Industries'}
                        </h3>
                        <div className="space-y-1 max-h-[400px] overflow-y-auto custom-scrollbar">
                          {getDisplayIndustries().map((industryItem, index) => (
                            <Link
                              key={index}
                              href={industryItem.href}
                              className="group/item flex items-center px-3 py-3 rounded-lg hover:bg-[#000048]/5 transition-all duration-200 cursor-pointer"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setActiveDropdown(null);
                              }}
                            >
                              <div className="w-2 h-2 rounded-full bg-[#000048]/30 group-hover/item:bg-[#000048] transition-colors mr-3 flex-shrink-0"></div>
                              <p className="text-base font-semibold text-gray-900 group-hover/item:text-[#000048] transition-colors">
                                {industryItem.title}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Mobile Regular Dropdown for other items */}
                  {activeDropdown === item.label && item.label !== 'Services' && item.label !== 'Industries' && (
                        <div className="mt-1 ml-4 space-y-1 animate-[slideDown_0.2s_ease-out]">
                      {item.dropdownItems.map((dropdownItem, index) => (
                            <Link
                              key={index}
                              href={dropdownItem.href}
                          className="group/item flex items-start gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-200 cursor-pointer"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setActiveDropdown(null);
                              }}
                            >
                              <div className="flex-shrink-0 mt-1">
                            <div className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-white"></div>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-white">
                                  {dropdownItem.title}
                                </p>
                            <p className="mt-0.5 text-xs text-white/70">
                                  {dropdownItem.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                </div>
              ))}

              {/* Mobile Company Menu */}
              <div>
                <button
                  onClick={() => {
                    if (activeDropdown === 'Company') {
                      setActiveDropdown(null);
                      setMenuDropdownOpen(false);
                      setCompanyLeftVisible(false);
                      setCompanyCenterVisible(false);
                    } else {
                      setActiveDropdown('Company');
                      setMenuDropdownOpen(true);
                      setCompanyLeftVisible(true);
                      setTimeout(() => {
                        setCompanyCenterVisible(true);
                      }, 150);
                    }
                  }}
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-[#000048] hover:text-[#000048]/90 hover:bg-white/10 rounded-lg transition-all duration-200 cursor-pointer"
                >
                  <span>Company</span>
                  {activeDropdown === 'Company' ? (
                    <X className="w-5 h-5 transition-transform duration-200" />
                  ) : (
                    <Menu className="w-5 h-5 transition-transform duration-200" />
                  )}
                </button>
                
                {/* Mobile Company Mega Menu */}
                {activeDropdown === 'Company' && (
                  <div className="mt-2 space-y-2 animate-[slideDown_0.2s_ease-out]">
                    {/* Left Side Categories */}
                    <div className="bg-gradient-to-br from-[#000048] via-[#000048] to-[#1a1a5e] rounded-xl p-4 mb-3">
                      <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                        <Building2 className="w-5 h-5" />
                        Our Company
                      </h3>
                      <div className="space-y-2">
                        {companyCategories.map((category, index) => (
                    <Link
                            key={index}
                            href={category.href}
                            className="group flex items-start gap-3 p-3 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setActiveDropdown(null);
                              setMenuDropdownOpen(false);
                            }}
                          >
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 group-hover:bg-white/20 flex items-center justify-center text-white">
                              {category.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className="text-white font-semibold text-sm mb-1">
                                {category.title}
                              </h4>
                              <p className="text-white/70 text-xs">
                                {category.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    
                    {/* Right Side Company List */}
                    <div className="bg-white rounded-xl p-4">
                      <h3 className="text-gray-900 text-lg font-bold mb-4">All Company Pages</h3>
                      <div className="space-y-1 max-h-[400px] overflow-y-auto custom-scrollbar">
                        {companyItems.map((item, index) => (
                            <Link
                              key={index}
                      href={item.href}
                              className="group/item flex items-center px-3 py-3 rounded-lg hover:bg-[#000048]/5 transition-all duration-200 cursor-pointer"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setActiveDropdown(null);
                                setMenuDropdownOpen(false);
                              }}
                            >
                            <div className="w-2 h-2 rounded-full bg-[#000048]/30 group-hover/item:bg-[#000048] transition-colors mr-3 flex-shrink-0"></div>
                            <p className="text-base font-semibold text-gray-900 group-hover/item:text-[#000048] transition-colors">
                              {item.title}
                            </p>
                    </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  )}
                </div>

              {/* Mobile CTA Button */}
              <Link
                href="/contact"
                className="group relative w-full mt-4 px-6 py-3.5 text-base font-bold text-white rounded-xl overflow-hidden cursor-pointer transition-all duration-300 active:scale-95"
                onClick={() => setMobileMenuOpen(false)}
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#000048] via-[#1a1a5e] to-[#000048] opacity-100 group-active:opacity-90 transition-opacity duration-300"></div>
                
                {/* Animated Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-active:translate-x-full transition-transform duration-700 ease-in-out"></div>
                
                {/* Border Glow */}
                <div className="absolute inset-0 rounded-xl border-2 border-white/30 group-active:border-white/50 transition-all duration-300"></div>
                
                {/* Content */}
                <div className="relative flex items-center justify-center gap-2 z-10">
                  <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                    Get Started
                  </span>
                  <ArrowRight className="w-5 h-5 transform group-active:translate-x-1 transition-transform duration-300" />
                </div>
                
                {/* Shadow Glow */}
                <div className="absolute inset-0 rounded-xl bg-[#000048] opacity-0 group-active:opacity-30 blur-xl -z-10 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
    </>
  );
};

export default Header;
'use client';

import { createContext, useEffect, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import humanizeDuration from "humanize-duration";
// Temporarily commented out Clerk authentication
// import { useAuth, useUser } from '@clerk/nextjs';
import axios from 'axios';
import { toast } from 'react-toastify';

interface Course {
  _id: string;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  courseContent: Chapter[];
  courseRatings: Rating[];
  instructor: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}

interface Chapter {
  chapterTitle: string;
  chapterContent: Lecture[];
}

interface Lecture {
  lectureTitle: string;
  lectureDuration: number;
  lectureVideo: string;
}

interface Rating {
  user: string;
  rating: number;
  review: string;
}

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  enrolledCourses: string[];
}

interface AppContextType {
  currency: string;
  allCourses: Course[];
  navigate: (path: string) => void;
  isEducator: boolean;
  setIsEducator: (value: boolean) => void;
  calculateRating: (course: Course) => number;
  calculateChapterTime: (chapter: Chapter) => string;
  calculateCourseDuration: (course: Course) => string;
  calculateNoOfLectures: (course: Course) => number;
  fetchUserEnrolledCourses: () => Promise<void>;
  setEnrolledCourses: (courses: Course[]) => void;
  enrolledCourses: Course[];
  backendUrl: string;
  userData: User | null;
  setUserData: (user: User | null) => void;
  getToken: () => Promise<string | null>;
  fetchAllCourses: () => Promise<void>;
}

export const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || '';
    const currency = process.env.NEXT_PUBLIC_CURRENCY || '$';
    const router = useRouter();

    // Mock Clerk authentication for development
    const getToken = async () => "mock-token";
    const user = null; // Mock user object

    const [allCourses, setAllCourses] = useState<Course[]>([]);
    const [isEducator, setIsEducator] = useState(false);
    const [enrolledCourses, setEnrolledCourses] = useState<Course[]>([]);
    const [userData, setUserData] = useState<User | null>(null);

    // Navigation function to replace useNavigate
    const navigate = (path: string) => {
        router.push(path);
    };

    // fetch all courses 
    const fetchAllCourses = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/course/all`);
            if (data.success) {
                setAllCourses(data.courses);
            } else {
                toast.error(data.message);
            }
        } catch (error: any) {
            toast.error(error.message);
        }
    };

    // fetch user data
    const fetchUserData = async () => {
        if (!user) return;

        if (user.publicMetadata.role === 'educator') {
            setIsEducator(true);
        }

        try {
            const token = await getToken();
            if (!token) return;

            const { data } = await axios.get(`${backendUrl}/api/user/data`, {
                headers: { Authorization: `Bearer ${token}` }
            });
        
            if (data.success) {
                setUserData(data.user);
            } else {
                toast.error(data.message);
            }
        } catch (error: any) {
            toast.error(error.message);
        }
    };

    // Function to calculate average rating of course
    const calculateRating = (course: Course) => {
        if (course.courseRatings.length === 0) {
            return 0;
        }
        let totalRating = 0;
        course.courseRatings.forEach(rating => {
            totalRating += rating.rating;
        });
        return Math.floor(totalRating / course.courseRatings.length);
    };

    // function to calculate course chapter time
    const calculateChapterTime = (chapter: Chapter) => {
        let time = 0;
        chapter.chapterContent.forEach((lecture) => time += lecture.lectureDuration);
        return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
    };

    // Function to calculate course Duration
    const calculateCourseDuration = (course: Course) => {
        let time = 0;
        course.courseContent.forEach((chapter) => 
            chapter.chapterContent.forEach(
                (lecture) => time += lecture.lectureDuration 
            )
        );

        return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
    };

    // Function to calculate to no. of lectures in the course
    const calculateNoOfLectures = (course: Course) => {
        let totalLectures = 0;
        course.courseContent.forEach(chapter => {
            if (Array.isArray(chapter.chapterContent)) {
                totalLectures += chapter.chapterContent.length;
            }
        });
        return totalLectures;
    };

    // Fetch user enrolled courses
    const fetchUserEnrolledCourses = async () => {
        if (!user) return;
        
        try {
            const token = await getToken();
            if (!token) return;
            
            const response = await axios.get(`${backendUrl}/api/user/enrolled-courses`, {
                headers: { Authorization: `Bearer ${token}` }
            });
    
            if (response.data && response.data.enrolledCourses) {
                setEnrolledCourses(response.data.enrolledCourses.reverse());
            } else {
                toast.error(response.data?.message || "No enrolled courses found.");
            }
        } catch (error: any) {
            console.error("Error fetching courses:", error);
            toast.error(error.response?.data?.message || error.message);
        }
    };
    
    useEffect(() => {
        fetchAllCourses();
    }, []);

    useEffect(() => {
        if (user) {
            fetchUserData();
            fetchUserEnrolledCourses();
        }
    }, [user]);

    const value = {
        currency,
        allCourses,
        navigate,
        isEducator,
        setIsEducator,
        calculateRating,
        calculateChapterTime,
        calculateCourseDuration,
        calculateNoOfLectures,
        fetchUserEnrolledCourses,
        setEnrolledCourses,
        enrolledCourses,
        backendUrl,
        userData,
        setUserData,
        getToken,
        fetchAllCourses
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

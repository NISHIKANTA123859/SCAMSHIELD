import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from '@/app/components/Navigation';
import { Login } from '@/app/components/Login';
import { AnimatedIntro } from '@/app/components/AnimatedIntro';
import { Home } from '@/app/components/Home';
import { MessageAnalyzer } from '@/app/components/MessageAnalyzer';
import { MessageResult } from '@/app/components/MessageResult';
import { LinkChecker } from '@/app/components/LinkChecker';
import { LinkResult } from '@/app/components/LinkResult';
import { ReportScam } from '@/app/components/ReportScam';
import { Profile } from '@/app/components/Profile';
import { Learn } from '@/app/components/Learn';

// Protected Route wrapper
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = localStorage.getItem('scamshield_auth') === 'true';
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
}

// Layout with Navigation
function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0a0e27]">
      <Navigation />
      {children}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        
        {/* Protected Intro */}
        <Route 
          path="/intro" 
          element={
            <ProtectedRoute>
              <AnimatedIntro />
            </ProtectedRoute>
          } 
        />
        
        {/* Protected Dashboard Routes */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Home />
              </DashboardLayout>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/message-analyzer" 
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <MessageAnalyzer />
              </DashboardLayout>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/message-result" 
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <MessageResult />
              </DashboardLayout>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/link-checker" 
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <LinkChecker />
              </DashboardLayout>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/link-result" 
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <LinkResult />
              </DashboardLayout>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/report" 
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <ReportScam />
              </DashboardLayout>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Profile />
              </DashboardLayout>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/learn" 
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Learn />
              </DashboardLayout>
            </ProtectedRoute>
          } 
        />
        
        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}
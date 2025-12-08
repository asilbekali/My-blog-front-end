import { Plus, Users, MessageSquare, LayoutDashboard, User } from 'lucide-react';

const SideBar = () => {
  return (
    <div className="w-64 bg-slate-900 h-screen flex flex-col relative overflow-hidden">
      {/* Blurred Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-slate-900 to-indigo-900/40"></div>
      
      {/* Logo/Brand Section */}
      <div className="p-6 relative z-10">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-12 h-12 bg-blue-500/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/10 shadow-lg group-hover:bg-blue-500/30 transition-all duration-300">
            <LayoutDashboard className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">SofDev</h1>
            <p className="text-xs text-slate-400">Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 py-4 px-3 relative z-10 space-y-2">
        <button className="w-full group">
          <div className="flex items-center gap-3 px-4 py-3 text-white bg-white/10 backdrop-blur-xl rounded-2xl transition-all duration-300 hover:bg-white/15 border border-white/10 shadow-lg">
            <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            <span className="font-medium">add post</span>
          </div>
        </button>

        <button className="w-full group">
          <div className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:text-white bg-white/5 backdrop-blur-xl rounded-2xl transition-all duration-300 hover:bg-white/10 border border-white/5 hover:border-white/10">
            <Users className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-medium">show users</span>
          </div>
        </button>

        <button className="w-full group">
          <div className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:text-white bg-white/5 backdrop-blur-xl rounded-2xl transition-all duration-300 hover:bg-white/10 border border-white/5 hover:border-white/10">
            <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-medium">show comments</span>
            <div className="ml-auto px-2 py-0.5 bg-red-500/80 backdrop-blur-sm text-white text-xs font-bold rounded-full">
              12
            </div>
          </div>
        </button>

        {/* Stats Card */}
        <div className="mt-8 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Quick Stats</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-400">Total Posts</span>
              <span className="text-lg font-bold text-white">248</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-400">Comments</span>
              <span className="text-lg font-bold text-white">1.2k</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-400">Users</span>
              <span className="text-lg font-bold text-white">856</span>
            </div>
          </div>
        </div>
      </nav>

      {/* User Profile Section */}
      <div className="p-3 relative z-10">
        <div className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
          <div className="relative">
            <div className="w-10 h-10 bg-blue-500/30 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20">
              <User className="w-5 h-5 text-blue-300" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 border-2 border-slate-900 rounded-full"></div>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-white">Admin User</p>
            <p className="text-xs text-slate-400">admin@sofdev.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
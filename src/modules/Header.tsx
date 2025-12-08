import { Search, Calendar, MessageSquare, Bell, ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 px-6 py-3.5 flex items-center justify-between">
      {/* Search Bar */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for anything..."
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Right Side Icons and User */}
      <div className="flex items-center gap-4">
        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <Calendar className="w-5 h-5" />
        </button>

        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <MessageSquare className="w-5 h-5" />
        </button>

        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-2 ml-2">
          <div className="text-right">
            <div className="text-sm font-medium text-gray-800">Anima Agrawal</div>
            <div className="text-xs text-gray-500">U.P, India</div>
          </div>
          <button className="flex items-center gap-1 hover:bg-gray-100 rounded-lg p-1 transition-colors">
            <img
              src="https://ui-avatars.com/api/?name=Anima+Agrawal&background=8b5cf6&color=fff&size=128"
              alt="Profile"
              className="w-9 h-9 rounded-full"
            />
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
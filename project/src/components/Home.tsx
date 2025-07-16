import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import SecurityTester from './SecurityTester';
import { Shield, Lock, Key, Cpu, Database, CheckCircle, LogOut, User } from 'lucide-react';

const Home: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white/5 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-orange-400 mr-3" />
              <h1 className="text-2xl font-bold text-white">SecurePass</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-white">
                <User className="h-5 w-5 mr-2" />
                <span>Welcome, {user}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Your Account is <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-orange-400">Secure</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Your password is protected using military-grade encryption. Here's how we keep you safe.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Argon2 Hashing */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 p-3 rounded-full mr-4">
                <Cpu className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Argon2 Hashing</h3>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                Your password is hashed using <strong className="text-orange-400">Argon2id</strong>, 
                the winner of the Password Hashing Competition and the gold standard for password security.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  Memory-hard algorithm resistant to GPU attacks
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  Configurable time and memory costs
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  Parallel processing support
                </li>
              </ul>
            </div>
          </div>

          {/* Custom Salting */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-red-600 to-pink-600 p-3 rounded-full mr-4">
                <Key className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Advanced Salting</h3>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                Each password uses a unique salt generated from your username using SHA-256, 
                then strategically mixed into your password.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  Unique salt for every user
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  Multi-part salt integration
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  Prevents rainbow table attacks
                </li>
              </ul>
            </div>
          </div>

          {/* Security Configuration */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-3 rounded-full mr-4">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Security Configuration</h3>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                Our system uses enterprise-grade security parameters to maximize protection.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-2xl font-bold text-orange-400">65,536</div>
                  <div className="text-sm text-gray-400">Memory Cost (KB)</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-2xl font-bold text-red-400">5</div>
                  <div className="text-sm text-gray-400">Time Cost</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-400">2</div>
                  <div className="text-sm text-gray-400">Parallelism</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-2xl font-bold text-amber-400">SHA-256</div>
                  <div className="text-sm text-gray-400">Salt Hash</div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Protection */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-3 rounded-full mr-4">
                <Database className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Data Protection</h3>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                Your password is never stored in plain text. Only the final hash is saved to our secure database.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  Zero-knowledge architecture
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  Encrypted database storage
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  Irreversible hashing process
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Security Process */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">How Your Password Gets Protected</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Salt Generation</h4>
              <p className="text-gray-400 text-sm">Your username is hashed with SHA-256 to create a unique salt</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-red-600 to-pink-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Password Salting</h4>
              <p className="text-gray-400 text-sm">Salt is strategically mixed into your password at multiple points</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Argon2 Hashing</h4>
              <p className="text-gray-400 text-sm">The salted password is hashed using Argon2id algorithm</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-600 to-rose-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">4</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Secure Storage</h4>
              <p className="text-gray-400 text-sm">Only the final hash is stored in our encrypted database</p>
            </div>
          </div>
        </div>

        {/* Security Testing Suite */}
        <SecurityTester />
      </main>
    </div>
  );
};

export default Home;
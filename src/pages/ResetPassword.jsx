import React, { useState } from 'react';

function ResetPassword() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [sentOtp, setSentOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  // Simulate sending OTP
  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setMessage('Please enter a valid email address');
      return;
    }
    // Simulate OTP send
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setSentOtp(generatedOtp);
    setMessage(`OTP sent to ${email}. (Demo OTP: ${generatedOtp})`);
    setStep(2);
  };

  // Simulate OTP verification
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp !== sentOtp) {
      setMessage('Invalid OTP. Please check your email and try again.');
      return;
    }
    setMessage('');
    setStep(3);
  };

  // Handle password reset
  const handleResetPassword = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setMessage('Password must be at least 6 characters.');
      setSuccess(false);
      return;
    }
    if (password !== confirm) {
      setMessage('Passwords do not match.');
      setSuccess(false);
      return;
    }
    setTimeout(() => {
      setSuccess(true);
      setMessage('Your password has been reset successfully!');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">Reset Password</h2>
        {step === 1 && (
          <form onSubmit={handleSendOtp} className="space-y-5">
            <div>
              <label className="block text-green-700 mb-2 font-semibold">Email Address</label>
              <input
                type="email"
                className="w-full border border-green-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>
            {message && (
              <div className="text-center text-sm text-green-600">{message}</div>
            )}
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 rounded-lg font-semibold hover:bg-green-800 transition"
            >
              Send OTP
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleVerifyOtp} className="space-y-5">
            <div>
              <label className="block text-green-700 mb-2 font-semibold">Enter OTP</label>
              <input
                type="text"
                className="w-full border border-green-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                value={otp}
                onChange={e => setOtp(e.target.value)}
                required
                placeholder="Enter the OTP sent to your email"
                maxLength={6}
              />
            </div>
            {message && (
              <div className="text-center text-sm text-green-600">{message}</div>
            )}
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 rounded-lg font-semibold hover:bg-green-800 transition"
            >
              Verify OTP
            </button>
            <button
              type="button"
              className="w-full text-green-700 underline mt-2"
              onClick={() => setStep(1)}
            >
              Change Email
            </button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleResetPassword} className="space-y-5">
            <div>
              <label className="block text-green-700 mb-2 font-semibold">New Password</label>
              <input
                type="password"
                className="w-full border border-green-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                minLength={6}
                placeholder="Enter new password"
              />
            </div>
            <div>
              <label className="block text-green-700 mb-2 font-semibold">Confirm Password</label>
              <input
                type="password"
                className="w-full border border-green-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
                required
                minLength={6}
                placeholder="Confirm new password"
              />
            </div>
            {message && (
              <div className={`text-center text-sm ${success ? 'text-green-600' : 'text-red-600'}`}>
                {message}
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 rounded-lg font-semibold hover:bg-green-800 transition"
            >
              Reset Password
            </button>
          </form>
        )}
        {success && step === 3 && (
          <div className="text-center mt-4 text-green-700 font-semibold">
            You can now log in with your new password.
          </div>
        )}
      </div>
    </div>
  );
}

export default ResetPassword;
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error caught by ErrorBoundary:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#110103] text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md w-full p-8 rounded-2xl bg-[#2E0307] border border-[#FACC15]/40 shadow-2xl">
            <h1 className="text-xl font-bold text-[#FACC15] mb-3">Al Saif Transport &amp; Rent A Car</h1>
            <p className="text-sm text-neutral-300 mb-6">
              An unexpected display issue occurred. Please refresh the page to reload the application.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FACC15] to-[#EAB308] text-black font-bold text-xs uppercase tracking-wider hover:brightness-110"
              >
                Reload Website
              </button>
              <a
                href="https://wa.me/923178710951"
                className="px-5 py-2.5 rounded-xl bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-105"
              >
                Contact WhatsApp
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

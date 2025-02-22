import { LoadingContext } from '@/context/LoadingContext';
import { useRouter } from 'next/navigation';

import { useContext, useState } from 'react';

export default function PanelFaqsAddViewModel() {
  const [isLoading, setIsLoading] = useState(false);
  const loading = useContext(LoadingContext);
  const router = useRouter();
  
  return { isLoading, setIsLoading, router, loading };
}

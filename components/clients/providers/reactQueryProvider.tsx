'use client'
import React,{ReactNode, useState} from 'react'
import {QueryClient,QueryClientProvider,} from '@tanstack/react-query'
import { queryClientOptions } from '@/utils/constants'

interface PropsProvider {
    children : ReactNode
}

const ReactQueryProvider = ({children} : PropsProvider ) => {

    const [queryClient] = useState(()=> new QueryClient(queryClientOptions))

  return (
     <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default ReactQueryProvider;
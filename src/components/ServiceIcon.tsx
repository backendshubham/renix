'use client'

import {
  FaBrain,
  FaRocket,
  FaPalette,
  FaCode,
  FaServer,
  FaCloud,
  FaDatabase,
  FaEthereum,
  FaMobileAlt,
} from 'react-icons/fa'
import { HiLightBulb } from 'react-icons/hi'

interface ServiceIconProps {
  icon: string
  className?: string
}

export default function ServiceIcon({ icon, className = '' }: ServiceIconProps) {
  const iconMap: Record<string, React.ReactNode> = {
    ai: <FaBrain className="w-full h-full" />,
    strategy: <HiLightBulb className="w-full h-full" />,
    design: <FaPalette className="w-full h-full" />,
    frontend: <FaCode className="w-full h-full" />,
    backend: <FaServer className="w-full h-full" />,
    devops: <FaCloud className="w-full h-full" />,
    data: <FaDatabase className="w-full h-full" />,
    blockchain: <FaEthereum className="w-full h-full" />,
    mobile: <FaMobileAlt className="w-full h-full" />,
  }

  const IconComponent = iconMap[icon] || <FaRocket className="w-full h-full" />

  return (
    <div className={`flex items-center justify-center ${className}`}>
      {IconComponent}
    </div>
  )
}


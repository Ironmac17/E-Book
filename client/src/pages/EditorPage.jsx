import React from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'
import {Sparkles,FileDown,Save,Menu,X,Edit,NotebookText,ChevronDown,FileText} from 'lucide-react'
import {arrayMove} from '@dnd-kit/sortable'
import axiosInsatance from '../utils/axiosInstance'
import { API_PATHS } from '../utils/apiPaths'
import Dropdown,{DropdownItem} from '../components/ui/Dropdown'
import InputField from '../components/ui/Button'
import Button from '../components/ui/Button'
import Modal from '../components/ui/Modal'
import SelectField from '../components/ui/SelectField'

const EditorPage = () => {
  return (
    <div>EditorPage</div>
  )
}

export default EditorPage
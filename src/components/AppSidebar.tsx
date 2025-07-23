import { Home, Users, Briefcase, Target, Award, Mail } from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

const navigationItems = [
  { title: "Início", url: "/", icon: Home },
  { title: "Sobre Nós", url: "/sobre", icon: Users },
  { title: "Serviços", url: "/servicos", icon: Briefcase },
  { title: "Tecnologias", url: "/tecnologias", icon: Target },
  { title: "Venha Ser", url: "/carreiras", icon: Award },
  { title: "Contato", url: "/contato", icon: Mail },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const isCollapsed = state === "collapsed"

  const isActive = (path: string) => currentPath === path
  const getNavCls = ({ isActive: active }: { isActive: boolean }) =>
    active 
      ? "bg-primary/20 text-primary font-semibold border-l-2 border-primary" 
      : "hover:bg-white/5 text-gray-300 hover:text-white transition-all duration-300"

  return (
    <Sidebar
      className={`${isCollapsed ? "w-16" : "w-72"} bg-black/95 backdrop-blur-xl border-r border-white/10 transition-all duration-300`}
      collapsible="icon"
    >
      <div className="p-6 border-b border-white/10">
        {!isCollapsed && (
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-troiton-300 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg">T</span>
            </div>
            <div>
              <h2 className="font-bold text-white text-lg">Troiton</h2>
              <p className="text-gray-400 text-sm">Technology Solutions</p>
            </div>
          </div>
        )}
        {isCollapsed && (
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-troiton-300 rounded-lg flex items-center justify-center mx-auto">
            <span className="text-black font-bold text-lg">T</span>
          </div>
        )}
      </div>

      <SidebarContent className="px-4 py-6">
        <SidebarGroup>
          <SidebarGroupLabel className={`${isCollapsed ? 'hidden' : 'block'} text-gray-400 text-xs uppercase tracking-wider mb-4`}>
            Navegação
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={({ isActive }) => 
                        `flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-300 ${getNavCls({ isActive })}`
                      }
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {!isCollapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!isCollapsed && (
          <div className="mt-8 p-4 bg-gradient-to-br from-primary/10 to-troiton-600/10 border border-primary/20 rounded-xl">
            <h3 className="text-white font-semibold mb-2">Transforme seu Negócio</h3>
            <p className="text-gray-400 text-sm mb-3">
              Descubra como nossa tecnologia pode impulsionar sua empresa.
            </p>
            <button className="w-full bg-primary hover:bg-primary/90 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
              Fale Conosco
            </button>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  )
}
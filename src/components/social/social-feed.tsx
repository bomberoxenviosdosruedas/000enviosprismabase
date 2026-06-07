'use client';

import type { SocialPost } from "@/types/social-post";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Share2 as Facebook, Camera as Instagram, MessageSquare, MessageCircle as MessageIcon, Share2, ExternalLink, ThumbsUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialFeedProps {
  posts: SocialPost[];
}

const platformIcons = {
  facebook: Facebook,
  instagram: Instagram,
  whatsapp: MessageSquare,
};

const platformColors = {
  facebook: "bg-primary",
  instagram: "bg-tertiary",
  whatsapp: "bg-secondary",
};

const PlatformIcon = ({ platform }: { platform: SocialPost['platform'] }) => {
  const Icon = platformIcons[platform];
  return <Icon className="w-5 h-5" />;
};

export function SocialFeed({ posts }: SocialFeedProps) {
  if (!posts || posts.length === 0) {
    return (
      <section className="py-20 px-4 bg-[background]">
        <div className="container mx-auto text-center">
          <p className="text-body-lg text-muted-foreground font-sans">Mantenete atento a nuestras próximas publicaciones.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-[background]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-display-md text-foreground mb-6 font-display uppercase tracking-tight">Publicaciones Recientes</h2>
          <p className="text-body-lg text-muted-foreground font-sans max-w-2xl mx-auto">
            Lo que está pasando ahora mismo en nuestras redes sociales oficiales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col bg-[background]/60 backdrop-blur-sm rounded-3xl border-white/10">
              <CardHeader className="flex flex-row items-center space-x-4 p-6 border-b border-white/10">
                {post.user.avatarUrl ? (
                  <div className="relative">
                    <Image
                      src={post.user.avatarUrl}
                      alt={post.user.name}
                      width={48}
                      height={48}
                      className="rounded-full border-2 border-primary/20"
                    />
                    <div className={cn("absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-slate-900 border-2 border-background shadow-sm", platformColors[post.platform])}>
                      <PlatformIcon platform={post.platform} />
                    </div>
                  </div>
                ) : (
                  <div className={cn("w-12 h-12 rounded-full flex items-center justify-center text-slate-900 shadow-md", platformColors[post.platform])}>
                    <PlatformIcon platform={post.platform} />
                  </div>
                )}
                <div>
                  <a href={post.user.profileUrl || post.postUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    <CardTitle className="text-body-lg font-bold font-display">{post.user.name}</CardTitle>
                  </a>
                  <p className="text-label-sm text-muted-foreground font-sans uppercase tracking-wider">
                    {new Date(post.timestamp).toLocaleDateString('es-AR', { month: 'short', day: 'numeric' })} • {post.platform}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="p-0 flex-grow">
                {post.imageUrl && post.platform !== 'whatsapp' && (
                  <a href={post.postUrl} target="_blank" rel="noopener noreferrer" className="block overflow-hidden relative group">
                    <Image
                      src={post.imageUrl}
                      alt={`Post de ${post.user.name}`}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover aspect-square group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                  </a>
                )}
                
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed text-body-md font-sans line-clamp-4">
                    {post.content}
                  </p>
                </div>

                {post.platform === 'whatsapp' && (
                   <div className="px-6 pb-6">
                    <Button asChild className={cn("w-full h-12 text-slate-900 uppercase font-display text-label-md rounded-xl", platformColors[post.platform])}>
                      <a href={post.postUrl} target="_blank" rel="noopener noreferrer">
                        <MessageSquare className="mr-2 h-5 w-5" /> Iniciar Chat Web
                      </a>
                    </Button>
                   </div>
                )}
              </CardContent>

              {post.platform !== 'whatsapp' && (
                <CardFooter className="p-6 border-t border-white/10 flex items-center justify-between bg-white/5">
                  <div className="flex items-center space-x-4 text-muted-foreground font-sans font-bold text-sm">
                    {post.likes !== undefined && (
                      <span className="flex items-center hover:text-primary transition-colors cursor-pointer"><ThumbsUp className="w-4 h-4 mr-1.5" /> {post.likes}</span>
                    )}
                    {post.comments !== undefined && (
                      <span className="flex items-center hover:text-primary transition-colors cursor-pointer"><MessageIcon className="w-4 h-4 mr-1.5" /> {post.comments}</span>
                    )}
                  </div>
                  <Button variant="ghost" size="sm" asChild className="text-primary font-bold hover:bg-primary/10 rounded-xl">
                    <a href={post.postUrl} target="_blank" rel="noopener noreferrer">
                      Ver Original <ExternalLink className="ml-1.5 w-4 h-4" />
                    </a>
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground uppercase font-display text-label-md h-14 px-10 rounded-xl shadow-xl hover:shadow-primary/20 transition-all">
            Seguir todas nuestras cuentas <span className="ml-2 font-sans">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

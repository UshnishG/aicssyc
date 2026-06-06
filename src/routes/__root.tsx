import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { SmoothScroll } from "../components/site/SmoothScroll";
import { BackgroundFog } from "../components/site/BackgroundFog";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    console.error("[ErrorBoundary]", error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "All India Computer Society Student & Young Professional Congress 2026" },
      { name: "description", content: "AICSSYC 2026 — the IEEE Computer Society SYP Congress at SRM IST, Kattankulathur, 8–11 October 2026." },
      { name: "author", content: "IEEE Computer Society SYP" },
      { property: "og:title", content: "All India Computer Society Student & Young Professional Congress 2026" },
      { property: "og:description", content: "IEEE CS SYP Congress 2026 · SRM IST, Kattankulathur · 8–11 October. Theme: Where Agents Meet Humans." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "AICSSYC 2026" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "All India Computer Society Student & Young Professional Congress 2026" },
      { name: "twitter:description", content: "IEEE CS SYP Congress 2026 · SRM IST · 8–11 October. Where Agents Meet Humans." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/tnH5r0AXJUMgyPdGMorfcJMcPXC3/social-images/social-1780612835820-Logo_-_AICSSYC.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/tnH5r0AXJUMgyPdGMorfcJMcPXC3/social-images/social-1780612835820-Logo_-_AICSSYC.webp" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <SmoothScroll>
          <BackgroundFog />
          {children}
        </SmoothScroll>
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}

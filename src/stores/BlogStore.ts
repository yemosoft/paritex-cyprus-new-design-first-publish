import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref, computed } from 'vue'



export interface PostData {
  title: string
  content: string
  image: string
  date: string
  pageTilte?: string
  pageDesc?: string
  tags?: string[]
}



const posts: PostData[] = [
  {
    title: "What Causes a Bear Market?",
    content: "High inflation rates ",
    date: "",
    image: "https://wdicciiggwwzqdbsngcc.supabase.co/storage/v1/object/public/webassets/1.jpg"
  },
  {
    title: "Bull vs. Bear Crypto Markets: What's The Difference?",
    content: 'The terms "bull" and "bear" or "bullish" and "bearish" are what crypto ',
    date: "",
    image: "https://wdicciiggwwzqdbsngcc.supabase.co/storage/v1/object/public/webassets/2.jpg"
  },
  {
    title: "What Causes a Bear Market?",
    content: 'The terms "bull" and "bear" or "bullish" and "bearish" are what crypto owners use to escribe big market changes, ',
    date: "",
    image: "https://wdicciiggwwzqdbsngcc.supabase.co/storage/v1/object/public/webassets/3.jpg"
  },
]


export const useBlogStore = defineStore('BlogStore', () => {



  const lastestPosts = ref<PostData[]>(posts)


  return {
    lastestPosts
  }
})

const ss = useBlogStore as any

/**
 * Pinia supports Hot Module replacement so you can edit your stores and
 * interact with them directly in your app without reloading the page.
 *
 * @see https://pinia.esm.dev/cookbook/hot-module-replacement.html
 * @see https://vitejs.dev/guide/api-hmr.html
 */
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(ss, import.meta.hot))
}

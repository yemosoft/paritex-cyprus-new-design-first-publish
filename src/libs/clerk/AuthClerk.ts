import Clerk from "@clerk/clerk-js";

class AuthClerk {

    public publishableKey = import.meta.env.VITE_CLERK_API

    public clerk: Clerk = new Clerk(this.publishableKey);

    private isLoaded = false

    async loadClerk() {
        if (!this.isLoaded) return
        await this.clerk.load();
        this.isLoaded = true
    }

    async getClerk(forceload: boolean = false) {
        if (forceload) await this.clerk.load();
        else await this.loadClerk()
        return this.clerk;
    }


}

export default new AuthClerk()
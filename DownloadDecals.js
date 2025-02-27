let totalDownloaded = 0; // Initialize a counter for total downloads

async function downloadDecals() {
    const decalsContainer = document.querySelector("#assetsItems");
    const decals = decalsContainer.querySelectorAll(".item-card-thumb-container img");
    
    // Check if there are any decals to download
    if (decals.length === 0) {
        console.log("No decals found on this page.");
        return;
    }

    for (let index = 0; index < decals.length; index++) {
        const decal = decals[index];
        const imageUrl = decal.getAttribute("src");
        if (!imageUrl) continue; // Skip if no image URL

        const filename = `Decal_${totalDownloaded + 1}.png`; // Use the correct variable name

        try {
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            totalDownloaded++; // Increment the download counter
            console.log(`Downloaded ${totalDownloaded} decal(s)`); // Live update for each download
        } catch (error) {
            console.error(error);
        }

        // Wait for 1 second before downloading the next decal
        await new Promise(resolve => setTimeout(resolve, 250));
    }

    console.log(`Decals downloaded on this page: ${decals.length}. Total downloaded: ${totalDownloaded}. Moving to next page...`);

    const nextPageButton = document.querySelector("#inventory-container > inventory > div > assets-explorer > div > div > div.tab-content.rbx-tab-content > div > div.pager-holder > ul > li.pager-next > button");
    
    // Only click on the next page button if it exists and is enabled
    if (nextPageButton && !nextPageButton.disabled) {
        setTimeout(() => {
            nextPageButton.click();
            // Ensure the next page loads fully before calling downloadDecals again
            setTimeout(downloadDecals, 3000); // Wait for next page to load before running again
        }, 2000);
    } else {
        console.log("No more pages left to download.");
        console.log(`Total decals downloaded: ${totalDownloaded}`); // Final total when finished
    }
}

// Run this function in the browser console while on the Roblox player's inventory decals page.
downloadDecals();

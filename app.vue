<script lang="ts" setup>
import useStatus from "@/composables/useStatus";

import "normalize.css";

const { productStatus, statusUpdates, refetch } = useStatus();

const isOpenNotifications = ref(false);

await refetch();

const dateFrom = useRelativeDate(statusUpdates.value[0].publicationDate);

const toggleNotifications = () => {
  isOpenNotifications.value = !isOpenNotifications.value;
};

const changeTheme = (newTheme: string) => {
  document.documentElement.setAttribute("data-theme", newTheme);
};
</script>
<template>
  <main>
    <header>
      <img src="~/assets/branding/logo.svg" />
      <div>
        <button @click="changeTheme('light')">Light</button>
        <button @click="changeTheme('dark')">Dark</button>
      </div>
      <a href="https://www.altura.io/contact?topic=technical-difficulties"
        >Een probleem melden</a
      >
    </header>
    <section class="app_hero">
      <h1>Altura platform status</h1>
      <span>Geen openstaande meldingen</span>
      <div class="app_hero_notifications" v-if="isOpenNotifications">
        <span> {{ dateFrom }}</span> <span>{{ statusUpdates[0].message }}</span>
      </div>
      <div>
        <button @click="toggleNotifications">
          {{ isOpenNotifications ? "Minder" : "Oudere meldingen" }}
        </button>
      </div>
    </section>
    <section class="app_productstatus_section">
      <div class="app_productstatus">
        <div v-for="item in productStatus">
          <div class="app_productstatus_row">
            <span>{{ item.name }}</span
            ><span class="app_pruductstatus_block_status">{{
              item.status !== "Offline" ? item.status : ""
            }}</span>
          </div>
          <div
            class="app_productstatus_block"
            v-for="subItem in item.subProductStatus"
          >
            <div class="app_productstatus_sub_block">
              <span class="app_productstatus_block_name">{{
                subItem.name
              }}</span
              ><span class="app_pruductstatus_block_status">{{
                subItem.status
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="app_help_section">
      <div class="app_help_block">
        <h2>Hulp nodig?</h2>
        <span
          >Zie je iets wat niet klopt en/of niet werkt? mail onze support desk.
          Wij kijken graag met je mee.</span
        >
        <div>
          <a to="https://www.altura.io/contact">Mail ons </a>
        </div>
      </div>
      <img
        class="app_help_img"
        src="https://strapi.altura.io/uploads/mike_setchell_Br_L_Swm_GP_Vp_I_unsplash_1_98fc95b396.png"
        alt="altura_banner"
      />
    </section>
    <div class="app_row_line"></div>
    <footer>
      <div>
        <span>Terms of use</span>
        <span>Privacy Policy</span>
        <span>Cookies</span>
      </div>
      <div>
        <img src="~/assets/branding/logo_small.svg" />
        <span> © Altura B.V. 2023</span>
      </div>
    </footer>
  </main>
</template>

<style lang="scss" scoped>
:global(body) {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
$large: 1600px;
$small: 1000px;
main {
  display: grid;

  > img {
    height: 5rem;
  }
}

header {
  @media screen and (max-width: $small) {
    align-items: center;
    padding-left: 70px;
    padding-right: 70px;
    height: 70px;
    background-color: var(--background);
    display: flex;
    justify-content: space-between;
  }
  @media screen and (max-width: $large) {
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    height: 70px;
    background-color: var(--background);
    display: flex;
    justify-content: space-between;
  }
  > img {
    height: 1rem;
  }
  > div {
    display: flex;
    gap: 3px;
    > button {
      background-color: transparent;
      border: none;
      color: var(--background-text-color);
      cursor: pointer;
    }
  }
  > a {
    background-color: var(--primary-500);
    padding: 12px;
    color: var(--light-text-color);
    border-radius: 5%;
    text-decoration: none;
  }
}

.app_hero {
  background-color: var(--background);
  color: var(--background-text-color);
  display: flex;
  flex-direction: column;
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 80px;
  padding-bottom: 40px;
  @media screen and (max-width: $small) {
    > h1 {
      font-size: 30px;
    }
  }

  @media screen and (max-width: $large) {
    > h1 {
      font-size: 60px;
    }
  }
  > span {
    margin-left: 5px;
    font-weight: 600;
  }
  > div {
    margin-top: 20px;

    > button {
      color: var(--primary-400);
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }
}

.app_hero_notifications {
  margin-left: 5px;
  display: flex;
  gap: 30px;
}

.app_productstatus_section {
  padding-top: 40px;
  background-color: var(--background);
}
.app_productstatus {
  width: 90%;
  margin: auto;
}

.app_productstatus_row {
  display: flex;
  justify-content: space-between;
  color: var(--background-text-color);
  background-color: var(--background);
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 20px;
  font-weight: 600;
}

.app_productstatus_sub_block {
  color: var(--background-text-color);
  background-color: var(--background);
  padding-left: 50px;
  padding-right: 20px;
  display: flex;
  font-weight: 600;
  padding-top: 10px;
  padding-bottom: 10px;
  justify-content: space-between;
}

.app_pruductstatus_block_status {
  color: var(--primary-400);
  font-weight: 400;
  font-size: large;
}

@media screen and (max-width: $large) {
  .app_help_section {
    background-color: var(--background);
    padding-bottom: 120px;
    display: flex;

    padding-top: 100px;
    width: 100%;
    margin: auto;
  }
}

@media screen and (max-width: $small) {
  .app_help_section {
    background-color: var(--background);
    padding-bottom: 120px;
    display: flex;
    flex-direction: column;
    padding-top: 100px;
    width: 100%;
    margin: auto;
  }
}

.app_help_block {
  position: relative;
  padding: 40px;
  padding-bottom: 80px;
  color: var(--background-text-color);
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  > div {
    > a {
      color: var(--primary-400);
    }
  }
}

.app_help_img {
  height: 300px;
  width: 500px;
}

.app_row_line {
  height: 1px;
  background-color: #e9e9e9;
  width: 90vw;
  margin: auto;
}

footer {
  align-items: center;
  padding-left: 70px;
  padding-right: 70px;
  height: 100px;
  color: var(--background-text-color);
  background-color: var(--background);
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: $small) {
    > div {
      font-size: x-small;
      display: flex;
      align-items: center;
      gap: 20px;
      color: #979797;
      > img {
        height: 30px;
      }
    }
  }

  @media screen and (max-width: $large) {
    > div {
      display: flex;
      align-items: center;
      gap: 20px;
      color: #979797;
      > img {
        height: 30px;
      }
    }
  }
  > button {
    background-color: var(--primary-400);
    color: var(--light-text-color);
    border-radius: 5%;
    padding: 8px;
  }
}
</style>

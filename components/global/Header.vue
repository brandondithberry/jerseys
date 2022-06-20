<template>
  <header>
    <div class="logo">
      <a href="/"><img src="img/logo.png" alt="Jersey's Logo" /></a>
    </div>
    <div class="menu">
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/catering">Catering</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
    <div class="cta">
      <a href="/" class="btn">Order Online</a>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
header {
  @apply flex w-full place-content-between justify-items-stretch p-5 items-center;

  .logo {
    img {
      width: 140px;
    }
  }

  .menu {
    @apply flex;

    ul {
      @apply flex gap-8 uppercase tracking-widest;
    }
  }

  .cta {
    @apply flex uppercase tracking-widest;
  }
}
</style>
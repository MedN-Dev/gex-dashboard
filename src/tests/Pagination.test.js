import { shallowMount } from "@vue/test-utils";
import Component from "../../src/components/Main/Overview/Content/ContentUsersPagination.vue";

describe("ContentUsersPagination.vue", () => {
  it("should be instance Vue", () => {
    const wrapper = shallowMount(Component, {
      propsData: { page: 1, perPage: 4, total: 2 }
    });
    expect(wrapper.isVueInstance()).toEqual(true);
  });

  it("should contains input params", () => {
    const wrapper = shallowMount(Component, {
      propsData: { page: 1, perPage: 4, total: 2 }
    });
    expect(wrapper.vm.perPage).toBeDefined();
    expect(wrapper.vm.perPage).toEqual(4);
    wrapper.setProps({ perPage: 13 });
    expect(wrapper.vm.perPage).toEqual(13);
  });
});

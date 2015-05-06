var getSlug=require("../lib/speakingurl");describe("getSlug smart truncate",function(){it("should maintain case characters, with smart truncate",function(e){getSlug("Foobarbaz, Bar Baz",{truncate:12}).should.eql("foobarbaz"),getSlug("Foobarbaz, Bar Baz",{truncate:15}).should.eql("foobarbaz-bar"),getSlug(" Foobarbaz, Bar Baz",{truncate:15}).should.eql("foobarbaz-bar"),getSlug("  Foobarbaz,    Bar Baz",{truncate:15}).should.eql("foobarbaz-bar"),getSlug("Foo Foo bar Zoo Bar Baz",{truncate:15}).should.eql("foo-foo-bar-zoo"),getSlug("Foo Foo bar ZooBar Baz",{truncate:15}).should.eql("foo-foo-bar"),getSlug("Foo Foo bar ZooBar Baz",{truncate:15}).should.eql("foo-foo-bar"),getSlug("Foo Foo Bar Bar",{truncate:"foo"}).should.eql("foo-foo-bar-bar"),getSlug("Foo Foo Bar Bar",{truncate:!1}).should.eql("foo-foo-bar-bar"),getSlug("Foo Foo Bar Bar",{truncate:!0}).should.eql("foo-foo-bar-bar"),getSlug("a Foo",{truncate:!0}).should.eql("a-foo"),e()})});